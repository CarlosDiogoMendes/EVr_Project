<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once './config/Database.php';
include_once './objects/Cliente.php';

$database = new Database();
$db = $database->getConnection();
$cliente = new Cliente($db);

$data = json_decode(file_get_contents("php://input"));

echo '{ ';
    if ($data == null || $data->email == null || $data->password == null) {
        echo '"message": "User authentication failed", '
           . '"errorCode": "0", '
           . '"errorMessage": "Both email and password must be specified"';
    }
    else {
        $stmt = $cliente->read('email', $data->email);
        $error = $stmt->errorInfo();
        $result = $stmt->fetch();
        if ($error[0] === false) {
            echo '"message": "User authentication failed", '
                . '"errorCode": "' . $error[1] . '", '
                . '"errorMessage": "' . $error[2] . '"';
        } else if (!$result || strcmp($result['password'], $data->password) != 0) {
            echo '"message": "User authentication failed", '
                . '"errorCode": "1", '
                . '"errorMessage": "Incorrect email or password"';
        } else {
            echo '"message": "User authentication successful", '
                . '"errorCode": "", '
                . '"errorMessage": ""';
        }
    }
echo ' }';