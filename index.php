<?php

require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;

$app = new Silex\Application();

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


/**
 * API
 */



/**
 * Create Round
 */
$app->post('/api/v1/round', function (Request $request) use ($app) {
    $course_id = $request->get('course_id');
    $sql = "INSERT INTO round (course_id) VALUES (" . $course_id . ")";
    $round = $app['db']->executeUpdate($sql);
    return $app['db']->lastInsertId();
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