<?php
    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    include_once './config/Database.php';
    include_once './objects/Enterprise.php';
    $database = new Database();
    $db = $database->getConnection();
    $enterprise = new enterprise($db);
    
    $data = json_decode(file_get_contents("php://input"));
    echo '{ ';
    if ($data == null || ($data->password == null && 
            $data->nome == null && $data->telefone == null && $data->pais == null &&
            $data->cidade == null && $data->localidade == null && $data->avatar == null && $data->numTrabalhadores == null &&
            $data->zonaOperacao == null && $data->registoAprovado == null) || $data->email == null) {
         echo '"message": "New values for enterprise must be specified"';
    } else {
        $enterprise->password = isset($data->password) ? $data->password : null;
        $enterprise->nome = isset($data->nome) ? $data->nome : null;
        $enterprise->telefone = isset($data->telefone) ? $data->telefone : null;
        $enterprise->pais = isset($data->pais) ? $data->pais : null;
        $enterprise->cidade = isset($data->cidade) ? $data->cidade : null;
        $enterprise->localidade = isset($data->localidade) ? $data->localidade : null;
        $enterprise->avatar = isset($data->avatar) ? $data->avatar : null;
        $enterprise->numTrabalhadores = isset($data->numTrabalhadores) ? $data->numTrabalhadores : null;
        $enterprise->zonaOperacao = isset($data->zonaOperacao) ? $data->zonaOperacao : null;
        $enterprise->registoAprovado = isset($data->registoAprovado) ? $data->registoAprovado : null;
        $stmt = $enterprise->update($data->email);
        $error = $stmt->errorInfo();
        echo '"message":"' . $error[2] . '"';
    }
    echo ' }';

