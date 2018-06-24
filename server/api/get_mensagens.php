<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once './config/Database.php';
include_once './objects/Mensagem.php';

$database = new Database();
$db = $database->getConnection();
$mensagem = new Mensagem($db);

$data = json_decode(file_get_contents("php://input"));

$type = filter_input(INPUT_GET, 'type');
$organization = filter_input(INPUT_GET, 'organization');

$result = array();
if (strcmp($type, "public") == 0) {
    
    $mensagensCliente = array();
    $stmt = $mensagem->readPublicClientMessages($organization);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensCliente, $mensagem_item);
    }
    
    $mensagensEmpresa = array();
    $stmt = $mensagem->readPublicEmpresaMessages($organization);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensEmpresa, $mensagem_item);
    }
    
    array_push($result, $mensagensCliente);
    array_push($result, $mensagensEmpresa);
    
} else if (strcmp($type, "private") == 0) {
    
    $user1 = filter_input(INPUT_GET, 'user1');
    $user2 = filter_input(INPUT_GET, 'user2');
    
    $mensagensEnviadasClienteEmpresa = array();
    $stmt = $mensagem->readMessagesClientToEmpresa($organization, $user1, $user2);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "recetor" => $Recetor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensEnviadasClienteEmpresa, $mensagem_item);
    }
    
    $mensagensRecebidasClienteEmpresa = array();
    $stmt = $mensagem->readMessagesClientToEmpresa($organization, $user2, $user1);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "recetor" => $Recetor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensRecebidasClienteEmpresa, $mensagem_item);
    }

    $mensagensEnviadasEmpresaEmpresa = array();
    $stmt = $mensagem->readMessagesEmpresaToEmpresa($organization, $user1, $user2);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "recetor" => $Recetor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensEnviadasEmpresaEmpresa, $mensagem_item);
    }
    
    $mensagensRecebidasEmpresaEmpresa = array();
    $stmt = $mensagem->readMessagesEmpresaToEmpresa($organization, $user2, $user1);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "recetor" => $Recetor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensRecebidasEmpresaEmpresa, $mensagem_item);
    }
    
    $mensagensEnviadasEmpresaCliente = array();
    $stmt = $mensagem->readMessagesEmpresaToClient($organization, $user1, $user2);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "recetor" => $Recetor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensEnviadasClienteEmpresa, $mensagem_item);
    }

    $mensagensRecebidasEmpresaCliente = array();
    $stmt = $mensagem->readMessagesEmpresaToClient($organization, $user2, $user1);
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $mensagem_item = array(
            "id" => $Id,
            "emissor" => $Emissor,
            "recetor" => $Recetor,
            "dataTempo" => $DataTempo,
            "mensagem" => $Mensagem,
            "idOrganizacao" => $IdOrganizacao);
        array_push($mensagensRecebidasClienteEmpresa, $mensagem_item);
    }

    array_push($result, $mensagensEnviadasClienteEmpresa);
    array_push($result, $mensagensRecebidasClienteEmpresa);
    array_push($result, $mensagensEnviadasEmpresaEmpresa);
    array_push($result, $mensagensRecebidasEmpresaEmpresa);
    array_push($result, $mensagensEnviadasEmpresaCliente);
    array_push($result, $mensagensRecebidasEmpresaCliente);
    
}

echo json_encode($result);
