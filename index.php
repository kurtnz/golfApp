<?php

require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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
 * Get hole
 */
$app->get('/api/v1/course_hole/{id}', function ($id) use ($app) {
    $sql = "SELECT * FROM hole WHERE id = ?";
    $hole = $app['db']->fetchAssoc($sql, array((int) $id));
    return $app->json($hole);
});



$app->run();