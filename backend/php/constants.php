<?php
// Load environment variables from the . env file
require_once __DIR__ . '/../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

// Define database constants from environment variables
define('DB_USER', getenv('DB_USER'));
define('DB_PASSWORD', getenv('DB_PASSWORD'));
define('DB_NAME', getenv('DB_NAME'));
define('DB_SERVER', getenv('DB_SERVER'));
define('DB_PORT', getenv('DB_PORT'));
?>
