<?php

try {
    //Retrieve the log of connection and connection to the server
    require_once('constants.php');

    $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Retrieve info from submitForm.js with ajax request
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $birthdate = $_POST['birthdate'];
    $adress = $_POST['adress'];

    //Prepare the insertion request
    $statement = $db->prepare("INSERT INTO userinformation (first_name, last_name, email, phone_number, birthdate, adress)
    VALUES (:first_name, :, :last_name, :email, :phone_number, :birthdate, adress)");

    //Bind parameters with corresponding variables
    $statement->bindParam(':first_name', $name);
    $statement->bindParam(':last_name', $surname);
    $statement->bindParam(':email', $email);
    $statement->bindParam(':phone_number', $phone_number);
    $statement->bindParam(':birthdate', $birthdate);
    $statement->bindParam(':adress', $adress);

    //Execution of the request
    $statement->execute();
} catch (PDOException $exception) {
    error_log('Request error: '.$exception->getMessage());
    var_dump($exception->getMessage());
    return false;
}
return true;

?>