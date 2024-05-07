<?php
require_once('constants.php');

$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$birthday = $_POST['birthday'];
$email = $_POST['email'];
$password = $_POST['password'];
$password = password_hash($password, PASSWORD_DEFAULT);

try {
    $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create POST data string
    $postData = http_build_query(['email' => $email]);

    // Check if the email already exist
    $statement = $db->prepare("SELECT COUNT(*) FROM userinformation WHERE first_name = :first_name AND last_name = :last_name AND birthdate = :birthday AND email = :email");
    $statement->bindParam(':first_name', $firstName);
    $statement->bindParam(':last_name', $lastName);
    $statement->bindParam(':birthday', $birthday);
    $statement->bindParam(':email', $email);
    $statement->execute();
    $emailExists = $statement->fetchColumn();
    
    if ($emailExists > 0) {
        echo "User already exists";
        return;
    }

    $insertStatement = $db->prepare("INSERT INTO userinformation (first_name, last_name, birthdate, email, password)
        VALUES (:first_name, :last_name, :birthday, :email, :password)");

    // Bind parameters with corresponding variables
    $insertStatement->bindParam(':first_name', $firstName);
    $insertStatement->bindParam(':last_name', $lastName);
    $insertStatement->bindParam(':birthday', $birthday);
    $insertStatement->bindParam(':email', $email);
    $insertStatement->bindParam(':password', $password);

    // Execution of the query
    $insertStatement->execute();

    echo "success";
} catch (PDOException $exception) {
    error_log('Request error: '.$exception->getMessage());
    echo "Error occurred during registration";
    return false;
}
?>
