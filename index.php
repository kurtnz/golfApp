<?php

require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\InMemoryUserProvider;
use Symfony\Component\Security\Core\User\User;

$app = new Silex\Application();

// Security
$app['security.jwt'] = [
    'secret_key' => 'Very_secret_key',
    'life_time'  => 86400,
    'algorithm'  => ['HS256'],
    'options'    => [
        'header_name'  => 'X-Access-Token',
        'token_prefix' => 'Bearer',
    ]
];
$app['users'] = function () use ($app) {
    $users = [
        'admin' => array(
            'roles' => array('ROLE_ADMIN'),
            // raw password is foo
            'password' => '5FZ2Z8QIkA7UTZ4BYkoC+GsReLf569mSKDsfods6LYQ8t+a8EW9oaircfMpmaLbPBh4FOBiiFyLfuZmTSUwzZg==',
            'enabled' => true
        ),
    ];
    return new InMemoryUserProvider($users);
};
$app['security.firewalls'] = array(
    'login' => [
        'pattern' => 'login',
        'anonymous' => true,
    ],
    // 'secured' => array(
    //     'pattern' => '^.*$',
    //     'logout' => array('logout_path' => '/logout'),
    //     'users' => $app['users'],
    //     'jwt' => array(
    //         'use_forward' => true,
    //         'require_previous_session' => false,
    //         'stateless' => true,
    //     )
    // ),
);
$app->register(new Silex\Provider\SecurityServiceProvider());
$app->register(new Silex\Provider\SecurityJWTServiceProvider());

// Database
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_mysql',
        'dbname'   => 'golf',
        'user'     => 'root',
        'password' => 'root'
    )
));

// Twig
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

// Debug
$app['debug'] = true;

$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request = new ParameterBag(is_array($data) ? $data : array());
    }
});

$app->get('/', function() use ($app) {
    return $app['twig']->render('index.twig');
});

$app->get('/login', function() use ($app) {
    return $app['twig']->render('index.twig');
});


/**
 * API
 */

/**
 * Login
 */
$app->post('/api/v1/login.json', function(Request $request) use ($app){
    $vars = json_decode($request->getContent(), true);

    try {
        if (empty($vars['username']) || empty($vars['password'])) {
            throw new UsernameNotFoundException(sprintf('Username "%s" does not exist.', $vars['username']));
        }

        /**
         * @var $user User
         */
        $user = $app['users']->loadUserByUsername($vars['username']);

        if (! $app['security.encoder.digest']->isPasswordValid($user->getPassword(), $vars['password'], '')) {
            throw new UsernameNotFoundException(sprintf('Username "%s" does not exist.', $vars['username']));
        } else {
            $response = [
                'success' => true,
                'token' => $app['security.jwt.encoder']->encode(['name' => $user->getUsername()]),
                'user_id' => 1
            ];
        }
    } catch (UsernameNotFoundException $e) {
        $response = [
            'success' => false,
            'error' => 'Invalid credentials',
        ];
    }

    return $app->json($response, ($response['success'] == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});


/**
 * Get profile - check JWT token
 */
$app->post('/api/v1/profile.json', function(Request $request) use ($app){
    $token = $request->headers->get('JWT-Authorization');

    try {

        if (! $tokenDecode = $app['security.jwt.encoder']->decode($token) ) {
            throw new Exception('Token doesnt exist');
        } else {
            $response = $token;
        }

    } catch (Exception $e) {

        $response = [
            'success' => false,
            'error' => 'Invalid credentials',
        ];

    }

    // return $app->json($tokenDecode);
    return $app->json($response, ($response['success'] == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});


/**
 * Create Round
 */
$app->post('/api/v1/round', function (Request $request) use ($app) {
    $course_id = $request->get('course_id');
    $round_status = $request->get('round_status');
    $sql = "INSERT INTO round (course_id, user_id, round_status) VALUES (" . $course_id . ", " . 1 . ", " . $round_status . ")";
    $round = $app['db']->executeUpdate($sql);
    return $app['db']->lastInsertId();
});

/**
 * Get Previous Round
 */
$app->get('/api/v1/round', function (Request $request) use ($app) {
    $user_id = $request->get('user_id');
    $sql = "SELECT * FROM round WHERE user_id = " . $user_id . " AND round_status = 1";
    $round = $app['db']->fetchAll($sql);

    if( $round[0]["round_status"] == '1' ) {
        $response = $app->json($round[0]);
    } else {
        $response = new Response('No previous round', 404);
    }
    return $response;
});


/**
  * Get courses
  */
$app->get('/api/v1/courses', function () use ($app) {
    $sql = "SELECT * FROM courses";
    $courses = $app['db']->fetchAll($sql);
    return $app->json($courses);
});


/**
  * Get course
  */
$app->get('/api/v1/course/{id}', function (Request $request, $id) use ($app) {
    $sql = "SELECT * FROM courses WHERE id = ?";
    $hole = $app['db']->fetchAssoc($sql, array((int) $id));
    return $app->json($hole);
});


/**
 * Get course hole
 */
$app->get('/api/v1/course_hole/{id}', function ($id) use ($app) {
    $sql = "SELECT * FROM course_hole WHERE course_id = ?";
    $hole = $app['db']->fetchAll($sql, array((int) $id));
    return $app->json($hole);
});


/**
 * Update hole
 */
$app->put('/api/v1/hole/{id}', function (Request $request, $id) use ($app) {
    $score      = $request->get('score');
    $bunkers    = $request->get('bunkers');
    $fairways   = $request->get('fairways');
    $putts      = $request->get('putts');
    // $club      = $request->get('club');
    // $scorecard = $request->get('scorecard');

    $sql = "UPDATE hole SET score = '" . $score . "', bunkers = '" . $bunkers . "', fairways = '" . $fairways . "', putts = '" . $putts . "' WHERE id = " . $id;

    $hole = $app['db']->executeUpdate($sql);

    return new Response('Hole updated', 200);
});

/**
 * Get hole
 */
$app->get('/api/v1/hole/{id}', function ($id) use ($app) {
    $sql = "SELECT * FROM hole WHERE id = ?";
    $hole = $app['db']->fetchAssoc($sql, array((int) $id));
    return $app->json($hole);
});

/**
 * Create hole
 */
$app->post('/api/v1/hole', function (Request $request) use ($app) {
    $score      = $request->get('score');
    $bunkers    = $request->get('bunkers');
    $fairways   = $request->get('fairways');
    $putts      = $request->get('putts');
    $round_id   = $request->get('round_id');
    $hole_index = $request->get('hole_index');
    // $club      = $request->get('club');
    // $scorecard = $request->get('scorecard');

    $sql = "INSERT INTO hole (round_id, hole_index, score, bunkers, fairways, putts) VALUES (". $round_id .", ". $hole_index .", " . $score . ", " . $bunkers . ", " . $fairways . ", " . $putts . ")";
    $hole = $app['db']->executeUpdate($sql);
    return $app['db']->lastInsertId();

    // $sql = "SELECT * from hole WHERE round_id = " . $round_id;
    // $hole = $app['db']->fetchAssoc($sql, array((int) $id));

    // // Record doesn't exists
    // if (is_bool($hole)) {

    //     $sql = "INSERT INTO hole (round_id, hole_index, score, bunkers, fairways, putts) VALUES (". $round_id .", ". $hole_index .", " . $score . ", " . $bunkers . ", " . $fairways . ", " . $putts . ")";
    //     $hole = $app['db']->executeUpdate($sql);
    //     return $app['db']->lastInsertId();
        
    // // Record exists
    // } else {

    //     return $app->json($hole);

    // }
});



/**
 * Get holes
 */
$app->get('/api/v1/holes', function (Request $request) use ($app) {
    $roundId = $request->get('roundId');
    $numHoles = $request->get('numHoles');
    $sql = "SELECT * FROM hole WHERE round_id = " . $roundId;
    $holes = $app['db']->fetchAll($sql, array((int) $id));

    // Check if there are already holes in DB
    if( count($holes) == 0 ) {

        for( $i=0; $i<$numHoles; $i++ ) {

            $sql = "INSERT INTO hole (round_id, hole_index) VALUES ('" . $roundId . "', '" . ($i+1) . "')";
            $hole = $app['db']->executeUpdate($sql);

        }

        $sql = "SELECT * FROM hole WHERE round_id = " . $roundId;
        $holes = $app['db']->fetchAll($sql, array((int) $id));

    }

    return $app->json($holes);
});



$app->run();