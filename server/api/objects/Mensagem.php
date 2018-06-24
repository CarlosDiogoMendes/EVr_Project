<?php

class Mensagem {

    private $conn;
    private $table_name1;
    private $table_name2;
    private $table_name3;
    private $table_name4;
    private $table_name5;

    public $id;
    public $emissor;
    public $recetor;
    public $dataTempo;
    public $mensagem;
    public $idOrganizacao;

    public function __construct($db) {
        $this->conn = $db;
        $this->table_name1 = "mensagemClienteEmpresa";
        $this->table_name2 = "mensagemEmpresaEmpresa";
        $this->table_name3 = "mensagemEmpresaCliente";
        $this->table_name4 = "mensagemCliente";
        $this->table_name5 = "mensagemEmpresa";
    }

    function readMessagesClientToEnterprise($organization, $emissor, $recetor) {
        $query = "SELECT * FROM $this->table_name1 WHERE IdOrganizacao = ? AND Emissor = ? AND Recetor = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $organization);
        $stmt->bindParam(2, $emissor);
        $stmt->bindParam(3, $recetor);
        $stmt->execute();
        return $stmt;
    }

    function readMessagesEnterpriseToEnterprise($organization, $emissor, $recetor) {
        $query = "SELECT * FROM $this->table_name2 WHERE IdOrganizacao = ? AND Emissor = ? AND Recetor = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $organization);
        $stmt->bindParam(2, $emissor);
        $stmt->bindParam(3, $recetor);
        $stmt->execute();
        return $stmt;
    }

    function readMessagesEnterpriseToClient($organization, $emissor, $recetor) {
        $query = "SELECT * FROM $this->table_name3 WHERE IdOrganizacao = ? AND Emissor = ? AND Recetor = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $organization);
        $stmt->bindParam(2, $emissor);
        $stmt->bindParam(3, $recetor);
        $stmt->execute();
        return $stmt;
    }

    function readPublicClientMessages($organization) {
        $query = "SELECT * FROM $this->table_name4 WHERE IdOrganizacao = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $organization);
        $stmt->execute();
        return $stmt;
    }

    function readPublicEnterpriseMessages($organization) {
        $query = "SELECT * FROM $this->table_name5 WHERE IdOrganizacao = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $organization);
        $stmt->execute();
        return $stmt;
    }

    function insertMessageClientToEnterprise() {
        $query = "INSERT INTO $this->table_name1 SET " . $this->buildQueryAttributes();
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = $this->bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }

    function insertMessageEnterpriseToEnterprise() {
        $query = "INSERT INTO $this->table_name2 SET " . $this->buildQueryAttributes();
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = $this->bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }

    function insertMessageEnterpriseToClient() {
        $query = "INSERT INTO $this->table_name3 SET " . $this->buildQueryAttributes();
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = $this->bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }
    
    function insertMessageClient() {
        $query = "INSERT INTO $this->table_name4 SET " . $this->buildQueryAttributes();
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = $this->bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }

    function insertMessageEnterprise() {
        $query = "INSERT INTO $this->table_name5 SET " . $this->buildQueryAttributes();
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = $this->bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }

    function addComma($res) {
        if (strlen($res) > 0) {
            $res .= ", ";
        }
        return $res;
    }

    function updateMessageClientToEnterprise($idOrganizacao, $emissor, $recetor) {
        $query = "UPDATE $this->table_name1 SET " . $this->buildQueryAttributes() . " WHERE IdOrganizacao=:IdOrganizacao AND Emissor=:Emissor AND Recetor=:Recetor";
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $idOrganizacao = htmlspecialchars(strip_tags($idOrganizacao));
        $emissor = htmlspecialchars(strip_tags($emissor));
        $recetor = htmlspecialchars(strip_tags($recetor));
        $stmt = $this->bindValues($stmt);
        $stmt->bindParam(":IdOrganizacao", $idOrganizacao);
        $stmt->bindParam(":Emissor", $emissor);
        $stmt->bindParam(":Recetor", $recetor);
        $stmt->execute();
        return $stmt;
    }

    function updateMessageEnterpriseToEnterprise($idOrganizacao, $emissor, $recetor) {
        $query = "UPDATE $this->table_name2 SET " . $this->buildQueryAttributes() . " WHERE IdOrganizacao=:IdOrganizacao AND Emissor=:Emissor AND Recetor=:Recetor";
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $idOrganizacao = htmlspecialchars(strip_tags($idOrganizacao));
        $emissor = htmlspecialchars(strip_tags($emissor));
        $recetor = htmlspecialchars(strip_tags($recetor));
        $stmt = $this->bindValues($stmt);
        $stmt->bindParam(":IdOrganizacao", $idOrganizacao);
        $stmt->bindParam(":Emissor", $emissor);
        $stmt->bindParam(":Recetor", $recetor);
        $stmt->execute();
        return $stmt;
    }
    
    function updateMessageEnterpriseToClient($idOrganizacao, $emissor, $recetor) {
        $query = "UPDATE $this->table_name3 SET " . $this->buildQueryAttributes() . " WHERE IdOrganizacao=:IdOrganizacao AND Emissor=:Emissor AND Recetor=:Recetor";
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $idOrganizacao = htmlspecialchars(strip_tags($idOrganizacao));
        $emissor = htmlspecialchars(strip_tags($emissor));
        $recetor = htmlspecialchars(strip_tags($recetor));
        $stmt = $this->bindValues($stmt);
        $stmt->bindParam(":IdOrganizacao", $idOrganizacao);
        $stmt->bindParam(":Emissor", $emissor);
        $stmt->bindParam(":Recetor", $recetor);
        $stmt->execute();
        return $stmt;
    }
    
    function updateMessageClient($idOrganizacao, $emissor) {
        $query = "UPDATE $this->table_name4 SET " . $this->buildQueryAttributes() . " WHERE IdOrganizacao=:IdOrganizacao AND Emissor=:Emissor";
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $idOrganizacao = htmlspecialchars(strip_tags($idOrganizacao));
        $emissor = htmlspecialchars(strip_tags($emissor));
        $stmt = $this->bindValues($stmt);
        $stmt->bindParam(":IdOrganizacao", $idOrganizacao);
        $stmt->bindParam(":Emissor", $emissor);
        $stmt->execute();
        return $stmt;
    }
    
    function updateMessageEnterprise($idOrganizacao, $emissor) {
        $query = "UPDATE $this->table_name5 SET " . $this->buildQueryAttributes() . " WHERE IdOrganizacao=:IdOrganizacao AND Emissor=:Emissor";
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $idOrganizacao = htmlspecialchars(strip_tags($idOrganizacao));
        $emissor = htmlspecialchars(strip_tags($emissor));
        $stmt = $this->bindValues($stmt);
        $stmt->bindParam(":IdOrganizacao", $idOrganizacao);
        $stmt->bindParam(":Emissor", $emissor);
        $stmt->execute();
        return $stmt;
    }

    private function buildQueryAttributes() {
        $res = "";
        if ($this->id) {
            $res .= "Id=:Id";
        }
        if ($this->emissor) {
            $res = $this->addComma($res);
            $res .= "Emissor=:Emissor";
        }
        if ($this->recetor) {
            $res = $this->addComma($res);
            $res .= "Recetor=:Recetor";
        }
        if ($this->dataTempo) {
            $res = $this->addComma($res);
            $res .= "DataTempo=:DataTempo";
        }
        if ($this->mensagem) {
            $res = $this->addComma($res);
            $res .= "Mensagem=:Mensagem";
        }
        if ($this->idOrganizacao) {
            $res = $this->addComma($res);
            $res .= "IdOrganizacao=:IdOrganizacao";
        }
        return $res;
    }

    private function sanitize() {
        if ($this->id) {
            $this->id = htmlspecialchars(strip_tags($this->id));
        }
        if ($this->emissor) {
            $this->emissor = htmlspecialchars(strip_tags($this->emissor));
        }
        if ($this->recetor) {
            $this->recetor = htmlspecialchars(strip_tags($this->recetor));
        }
        if ($this->dataTempo) {
            $this->dataTempo = htmlspecialchars(strip_tags($this->dataTempo));
        }
        if ($this->mensagem) {
            $this->mensagem = htmlspecialchars(strip_tags($this->mensagem));
        }
        if ($this->idOrganizacao) {
            $this->idOrganizacao = htmlspecialchars(strip_tags($this->idOrganizacao));
        }
    }

    private function bindValues($stmt) {
        if ($this->id) {
            $stmt->bindParam(":Id", $this->id);
        }
        if ($this->emissor) {
            $stmt->bindParam(":Emissor", $this->emissor);
        }
        if ($this->recetor) {
            $stmt->bindParam(":Recetor", $this->recetor);
        }
        if ($this->dataTempo) {
            $stmt->bindParam(":DataTempo", $this->dataTempo);
        }
        if ($this->mensagem) {
            $stmt->bindParam(":Mensagem", $this->mensagem);
        }
        if ($this->idOrganizacao) {
            $stmt->bindParam(":IdOrganizacao", $this->idOrganizacao);
        }
        return $stmt;
    }

}
