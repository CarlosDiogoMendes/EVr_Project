<?php

class OrganizacaoVirtual {
    
    private $conn;
    private $table_name;      
    
    public $idFestival;
    public $emailCliente;
    public $emailEmpresa;
    
    public function __construct($db) {
        $this->conn = $db;
        $this->table_name = "organizacaoVirtual";
    }
    
    function read($filter, $value) {
        $query = "SELECT * FROM $this->table_name";
        if ($filter != NULL && $value != NULL) {
            $query .= " WHERE $filter = ?";
        }
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $value);
        $stmt->execute();
        return $stmt;
    }
    
    function insert() {             
        $query = "INSERT INTO $this->table_name SET " . $this->buildQueryAttributes();
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = $this->bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }
    
    function delete($idFestival, $emailCliente) {
        $query = "DELETE FROM $this->table_name WHERE idFestival = ? AND emailCliente = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $idFestival);
        $stmt->bindParam(2, $emailCliente);
        $stmt->execute();
        return $stmt;
    }
    
    function addComma($res) {
      if(strlen($res) > 0) {
        $res .= ", ";
      }
      return $res;
    }
    
    function update($idFestival, $emailCliente, $emailEmpresa) {
        $query = "UPDATE $this->table_name SET " . $this->buildQueryAttributes() . " WHERE idFestival = ? AND emailCliente = ? AND emailEmpresa = ?";
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = $this->bindValues($stmt);
        $stmt->bindParam(1, $idFestival);
        $stmt->bindParam(2, $emailCliente);
        $stmt->bindParam(3, $emailEmpresa);
        $stmt->execute();
        return $stmt;
    }

    private function buildQueryAttributes() {
      $res = "";
      if($this->idFestival) {
        $res .= "IdFestival=:IdFestival";
      }
      if($this->emailCliente) {
        $res = $this->addComma($res);
        $res .= "EmailCliente=:EmailCliente";
      }
      if($this->emailEmpresa) {
        $res = $this->addComma($res);
        $res .= "EmailEmpresa=:EmailEmpresa";
      }
      return $res;
    }
    
    private function sanitize() {
      if ($this->idFestival) {
        $this->idFestival=htmlspecialchars(strip_tags($this->idFestival));
      }
      if ($this->emailCliente) {
        $this->emailCliente=htmlspecialchars(strip_tags($this->emailCliente));
      }
      if ($this->emailEmpresa) {
        $this->emailEmpresa=htmlspecialchars(strip_tags($this->emailEmpresa));
      }
    }
    
    private function bindValues($stmt) {
      if ($this->idFestival) {
        $stmt->bindParam(":IdFestival", $this->idFestival);
      }
      if ($this->emailCliente) {
        $stmt->bindParam(":EmailCliente", $this->emailCliente);
      }
      if ($this->emailEmpresa) {
       $stmt->bindParam(":EmailEmpresa", $this->emailEmpresa);
      }
      return $stmt;
    }
}