<?php
header('Content-Type: application/json');

require_once('recover_data_for_patient.php');

$data = getUserData();

foreach($data as &$row) {
    $base64Image = $row['bodychart_image'];
    $row['bodychart_image'] = 'data:image/jpeg;base64,' . $base64Image;
}

echo json_encode($data);
?>