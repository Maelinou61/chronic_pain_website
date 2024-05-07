<?php
try
{
    //connection
    require_once('constants.php');
    $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SELECT request to recover the data from "newpain" table
    $query = "SELECT p.id pain_intensity, p.pain_related_distress, p.pain_related_interference,
    pb.pain_beginning AS ID_pain_beginning,
    tp.temporal_pattern AS ID_temporal_pattern,
    pl.pain_location AS ID_pain_location,
    yn_cancer.response AS cancer,
    yn_cancer_treatment.response AS cancer_treatment,
    yn_begin_after_surgery.response AS begin_after_surgery,
    yn_worse_after_surgery.response AS worse_after_surgery,
    yn_spread_of_pain.response AS spread_of_pain,
    yn_area_of_surgery.response AS area_of_surgery,
    ui.first_name, ui.last_name, ui.email, ui.phone_number, ui.birthdate, ui.adress
    FROM newpain p
    LEFT JOIN pain_beginning pb ON p.ID_pain_beginning = pb.ID
    LEFT JOIN temporal_pattern tp ON p.ID_temporal_pattern = tp.ID
    LEFT JOIN pain_location pl ON p.ID_pain_location = pl.ID
    LEFT JOIN yesorno_questions yn_cancer ON p.cancer = yn_cancer.ID
    LEFT JOIN yesorno_questions yn_cancer_treatment ON p.cancer_treatment = yn_cancer_treatment.ID
    LEFT JOIN yesorno_questions yn_begin_after_surgery ON p.begin_after_surgery = yn_begin_after_surgery.ID
    LEFT JOIN yesorno_questions yn_worse_after_surgery ON p.worse_after_surgery = yn_worse_after_surgery.ID
    LEFT JOIN yesorno_questions yn_spread_of_pain ON p.spread_of_pain = yn_spread_of_pain.ID
    LEFT JOIN yesorno_questions yn_area_of_surgery ON p.area_of_surgery = yn_area_of_surgery.ID
    LEFT JOIN userinformation ui ON p.ID_user = ui.ID";
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