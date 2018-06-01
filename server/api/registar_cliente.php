<?php

    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once './config/Database.php';
    include_once './objects/Cliente.php';

    $database = new Database();
    $db = $database->getConnection();
    $cliente = new Cliente($db);
    
    $data = json_decode(file_get_contents("php://input"));
 
    echo '{ ';
    if ($data == null || $data->email == null || $data->password == null || $data->username == null || 
            $data->nome == null || $data->telefone == null || $data->telemovel == null || $data->morada == null) {
         echo '"message": "User register failed", '
                    . '"errorCode": "0", '
                    . '"errorMessage": "Email, password, username, name, phone, mobile and address values must be specified"';
    } else {
        $stmt = $cliente->create();
        $error = $stmt->errorInfo();
        if ($error[0] === false) {
            echo '"message": "User register failed", '
                    . '"errorCode": "' . $error[1] . '", '
                    . '"errorMessage": "' . $error[2] . '"';
        } else {
            echo '"message": "User register successful", '
                    . '"errorCode": "", '
                    . '"errorMessage": ""';
        }
    }
    echo ' }';