<?php
require_once('constants.php');

$email = $_POST['email'];

try {
    $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $statement = $db->prepare("SELECT COUNT(*) FROM userinformation WHERE email = :email");
    $statement->bindParam(':email', $email);
    $statement->execute();
    $emailExists = $statement->fetchColumn();

    echo json_encode($emailExists > 0);
} catch (PDOException $exception) {
    error_log('Database connection error: '.$exception->getMessage());
    echo json_encode(false); // Return false in case of database error
}
?>
