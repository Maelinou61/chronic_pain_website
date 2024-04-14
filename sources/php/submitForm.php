<?php

try {
    //Retrieve the log of connection and connection to the server
    require_once('constants.php');

    $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Retrieve info from submitForm.js with ajax request
    $date = $_POST['pain_begining'];
    $pain_intensity = $_POST['pain_intensity'];
    $idPattern = $_POST['pattern'];
    $idDistress = $_POST['distress'];
    $idInterference = $_POST['interference'];
    $idPainLocation = $_POST['pain_location'];

    //Prepare the insertion request
    $statement = $db->prepare("INSERT INTO newpain (date, ID_description_pain, ID_temporal_pattern, ID_pain_related_distress, ID_pain_related_interference, ID_pain_location)
    VALUES (:date, :pain_intensity, :pattern, :distress, :interference, :pain_location)");

    //Bind parameters with corresponding variables
    $statement->bindParam(':date', $date);
    $statement->bindParam(':pain_intensity', $pain_intensity);
    $statement->bindParam(':pattern', $idPattern);
    $statement->bindParam(':distress', $idDistress);
    $statement->bindParam(':interference', $idInterference);
    $statement->bindParam(':pain_location', $idPainLocation);

    //Execution of the request
    $statement->execute();
} catch (PDOException $exception) {
    error_log('Request error: '.$exception->getMessage());
    var_dump($exception->getMessage());
    return false;
}
return true;

?>