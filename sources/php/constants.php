<?php
// Load environment variables from the . env file
require_once __DIR__ . '/../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

// Define database constants from environment variables
define('DB_USER', $_ENV['DB_USER']);
define('DB_PASSWORD', $_ENV['DB_PASSWORD']);
define('DB_NAME', $_ENV['DB_NAME']);
define('DB_SERVER', $_ENV['DB_SERVER']);
define('DB_PORT', $_ENV['DB_PORT']);
?>
