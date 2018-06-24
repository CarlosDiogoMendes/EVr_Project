<?php
class Pais {
    
    // database connection and table name
    private $conn;
    private $table_name;			
    
    // object properties
    public $codigo;
    public $nome;
    public $capital;

    // constructor with $db as database connection
    public function __construct($db) {
        $this->conn = $db;
        $this->table_name = "pais";
    }

    // read users
    function read($filter, $value) {
        $query = "SELECT * FROM $this->table_name";
        if ($filter != null && $value != null) {
            $filter = htmlspecialchars(strip_tags($filter));
            $query .= " WHERE $filter = ?";
        }
        $stmt = $this->conn->prepare($query);
        $value = htmlspecialchars(strip_tags($value));
        $stmt->bindParam(1, $value);
        $stmt->execute();
        return $stmt;
    }

    function insert() {        			
        $query = "INSERT INTO " . $this->table_name . 
              " SET " . $this->buildQueryAttributes();
        $stmt = $this->conn->prepare($query);
        sanitize();
        $stmt = bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }

    function delete($codigo) {
        $query = "DELETE FROM " . $this->table_name . " WHERE codigo = ?";
        $stmt = $this->conn->prepare($query);
        $this->codigo = htmlspecialchars(strip_tags($this->codigo));
        $stmt->bindParam(1, $this->codigo);
        $stmt->execute();
        return $stmt;
    }

    function addComma($res) {
      if(strlen($res) > 0) {
        $res .= ", ";
      }
      return $res;
    }
    
    function update(){
        $query = "UPDATE " . $this->table_name . 
              " SET " . $this->buildQueryAttributes() . 
              " WHERE codigo = :codigo";
        $stmt = $this->conn->prepare($query);
        $this->sanitize();
        $stmt = bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }
    
    private function buildQueryAttributes() {
      $res = "";
      if($this->codigo) {
        $res .= "codigo = :codigo";
      }
      if($this->nome) {
        $res = $this->addComma($res);
        $res .= "nome = :nome";
      }
      if($this->capital) {
        $res = $this->addComma($res);
        $res .= "capital = :capital";
      }
      return $res;
    }
    
    private function sanitize() {
      if ($this->codigo) {
        $this->codigo=htmlspecialchars(strip_tags($this->codigo));
      }
      if ($this->nome) {
        $this->nome=htmlspecialchars(strip_tags($this->nome));
      }
      if ($this->capital) {
        $this->capital=htmlspecialchars(strip_tags($this->capital));
      }
    }
    
    private function bindValues($stmt) {
      if ($this->codigo) {
        $stmt->bindParam(":codigo", $this->codigo);
      }
      if ($this->nome) {
        $stmt->bindParam(":nome", $this->nome);
      }
      if ($this->capital) {
        $stmt->bindParam(":capital", $this->capital);
      }
      return $stmt;
    }
    
    function getCodeFromCountry($country) {
        $query = "SELECT Codigo FROM pais WHERE Nome = ?";
        $stmt = $this->conn->prepare($query);
        $country = htmlspecialchars(strip_tags($country));
        $stmt->bindParam(1, $country);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row['Codigo']; 
    }
    
}

