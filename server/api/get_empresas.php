<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once './config/Database.php';
include_once './objects/enterprise.php';

$database = new Database();
$db = $database->getConnection();
$enterprise = new enterprise($db);

$filter = filter_input(INPUT_GET, 'filter');
$value = $filter != NULL ? filter_input(INPUT_GET, 'value') : NULL;

$stmt = $enterprise->read($filter, $value);

$enterprises = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    extract($row);
    $enterprise_item = array(
        "email" => $Email,
        "password" => $Password,
        "nome" => $Nome,
        "telefone" => $Telefone,
        "pais" => $Pais,
        "cidade" => $Cidade,
        "localidade" => $Localidade,
        "avatar" => base64_encode($Avatar),
        "numTrabalhadores" => $NumTrabalhadores,
        "zonaOperacao" => $ZonaOperacao,
        "tipo" => $Tipo
    );
    array_push($enterprises, $enterprise_item);
}
echo json_encode($enterprises);