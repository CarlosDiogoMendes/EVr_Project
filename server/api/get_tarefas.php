<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once './config/Database.php';
include_once './objects/Tarefa.php';

$database = new Database();
$db = $database->getConnection();
$tarefa = new Tarefa($db);

$filter = filter_input(INPUT_GET, 'filter');
$value = $filter != NULL ? filter_input(INPUT_GET, 'value') : NULL;

$stmt = $tarefa->read($filter, $value);

$tarefas = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    extract($row);
    $tarefa_item = array(
        "id" => $Id,
        "tipo" => $Tipo,
        "dataTempoInicio" => $DataTempoInicio,
        "dataTempoFim" => $DataTempoFim,
        "festival" => $Festival,
        "coordenador" => $Coordenador,
        "responsavel" => $Responsavel,
        "estado" => $Estado
    );
    array_push($tarefas, $tarefa_item);
}
echo json_encode($tarefas);