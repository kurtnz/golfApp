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
 * Create hole
 */
$app->post('/api/v1/hole', function (Request $request) use ($app) {
    $score     = $request->get('score');
    $bunkers   = $request->get('bunkers');
    $fairways  = $request->get('fairways');
    $putts     = $request->get('putts');
    // $club      = $request->get('club');
    // $scorecard = $request->get('scorecard');

    $sql = "INSERT INTO hole (score, bunkers, fairways, putts) VALUES (" . $score . ", " . $bunkers . ", " . $fairways . ", " . $putts . ")";

    $hole = $app['db']->executeUpdate($sql);

    return $app['db']->lastInsertId();
});



$app->run();