<?php
session_set_cookie_params(7200);
session_start();

try {
    require_once("constants.php");

    $db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupération des données du formulaire
    $email = $_POST["email"];
    $password = $_POST["password"];
    $firstName = $_POST["first_name"];
    $lastName = $_POST["last_name"];

    // Vérification des informations de connexion
    $statement = $db->prepare("SELECT * FROM userinformation WHERE email = :email AND first_name = :first_name AND last_name = :last_name");
    $statement->bindParam(':email', $email);
    $statement->bindParam(':first_name', $firstName);
    $statement->bindParam(':last_name', $lastName);
    $statement->execute();
    $user = $statement->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user["password"]) && $user["first_name"] === $firstName && $user["last_name"] === $lastName) {
        // L'utilisateur est authentifié avec succès, enregistrez son ID dans la session
        $_SESSION["user_id"] = $user["ID"];
        echo "success";
        exit;
    } else {
        echo "error";
        exit;
    }
} catch (PDOException $exception) {
    error_log('Database connection error: '.$exception->getMessage());
    echo "error"; 
    exit;
}
?>
