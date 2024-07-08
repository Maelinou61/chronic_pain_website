<?php
session_start();

// Connection
require_once('constants.php');
$db = new PDO('mysql:host=' . DB_SERVER . ';dbname=' . DB_NAME . ';charset=utf8', DB_USER, DB_PASSWORD);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Verify if the user is authenticated
if (!isset($_SESSION["user_id"])) {
    echo json_encode(["error" => "User not authenticated"]);
    exit; // Exit to stop further execution
}

$currentUserID = $_SESSION["user_id"];

// Prepare SQL query to check if any entries exist for the current user
$sql = "SELECT COUNT(*) AS count_entries FROM newpain WHERE ID_user = :currentUserID";

$stmt = $db->prepare($sql);
$stmt->bindParam(':currentUserID', $currentUserID, PDO::PARAM_INT); // Bind the parameter
$stmt->execute();

$row = $stmt->fetch(PDO::FETCH_ASSOC);
$countEntries = $row['count_entries'];

// Return JSON response indicating whether entries exist for the current user
if ($countEntries > 0) {
    echo json_encode(['exists' => true]);
} else {
    echo json_encode(['exists' => false]);
}

$db = null; // Close database connection
?>
