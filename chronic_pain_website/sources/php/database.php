<?php
require_once("constants.php");


//add in a table according to the tables of the database the data of each table for the drop-down menus
$db = dbConnect();

$data = array();

$data['painBeginning'] = dbGetDescription($db, 'pain_beginning');
$data['descriptionTemporalPattern'] = dbGetDescription($db, 'temporal_pattern');
$data['descriptionPainLocation'] = dbGetDescription($db, 'pain_location');
$data['painMovement'] = dbGetDescription($db, 'yesorno_questions');
$data['cancer'] = dbGetDescription($db, 'yesorno_questions');
$data['cancerTreatment'] = dbGetDescription($db, 'yesorno_questions');
$data['beginAfterSurgery'] = dbGetDescription($db, 'yesorno_questions');
$data['worseAfterSurgery'] = dbGetDescription($db, 'yesorno_questions');
$data['areaSurgery'] = dbGetDescription($db, 'yesorno_questions');
$data['painSpreadSurgery'] = dbGetDescription($db, 'yesorno_questions');


echo json_encode($data);


//connection function
function dbConnect()
{
    try
    {
        $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8',
        DB_USER, DB_PASSWORD);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $exception)
    {
        error_log('Connection error: '.$exception->getMessage());
        return false;
    }

    return $db;
}



//Recover the data from the DB depending on what the user wants
function dbGetDescription($db, $tableName)
{
    try {
        $statement = $db->query('SELECT * FROM '.$tableName);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    } 
    catch(PDOException $exception) {
        return false;
    }
}

?>