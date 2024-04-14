<?php
try
{
    //connection
    require_once('constants.php');
    $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SELECT request to recover the data from "newpain" table
    $query = "SELECT p.id, p.date, p.ID_description_pain, p.ID_pain_related_distress, p.ID_pain_related_interference,
    tp.temporal_pattern AS ID_temporal_pattern,
    pl.pain_location AS ID_pain_location
    FROM newpain p
    LEFT JOIN temporal_pattern tp ON p.ID_temporal_pattern = tp.ID
    LEFT JOIN pain_location pl ON p.ID_pain_location = pl.ID
    ";
    $stmt = $db->query($query);

    //Recover the results
    $dataTable = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //print the data recovered in the page recover_data.php
    echo json_encode($dataTable);

} catch (PDOException $exception)

{
    error_log('Request error '.$exception->getMessage());
    var_dump($exception->getMessage());
    return false;
}
return true;

?>