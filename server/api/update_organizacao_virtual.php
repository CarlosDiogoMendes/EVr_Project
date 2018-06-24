<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once './config/Database.php';
    include_once './objects/OrganizacaoVirtual.php';
    
    $database = new Database();
    $db = $database->getConnection();
    $organizacaoVirtual = new OrganizacaoVirtual($db);
    
    $data = json_decode(file_get_contents("php://input"));
    echo '{ ';
    if ($data == null || !isset($data->idFestival) || 
            (!isset($data->emailCliente) && !isset($data->emailEmpresa) && !isset($data->organizacaoAprovada))) {
         echo '"message": "New values for virtual organization must be specified"';
    } else {
        $organizacaoVirtual->emailCliente = isset($data->emailCliente) ? $data->emailCliente : null;
        $organizacaoVirtual->emailEmpresa = isset($data->emailEmpresa) ? $data->emailEmpresa : null;
        $organizacaoVirtual->organizacaoAprovada = isset($data->organizacaoAprovada) ? $data->organizacaoAprovada : null;
        $stmt = $organizacaoVirtual->update($data->idFestival);
        $error = $stmt->errorInfo();
        echo '"message":"' . $error[2] . '"';
    }
    echo ' }';


