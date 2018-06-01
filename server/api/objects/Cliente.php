<?php
class Cliente {

    // database connection and table name
    private $conn;
    private $table_name;			
    
    // object properties
    public $email;
    public $password;
    public $username;
    public $nome;
    public $telefone;
    public $telemovel;
    public $morada;
    public $avatar;

    // constructor with $db as database connection
    public function __construct($db) {
        $this->conn = $db;
        $this->table_name = "cliente";
    }

    // read users
    function read($filter, $value) {
        $query = "SELECT * FROM $this->table_name";
        if ($filter != NULL && $value != NULL) {
            $query .= " WHERE $filter = $value";
        }
        $stmt = $this->conn->prepare($query);
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

    function delete(){
        $query = "DELETE FROM " . $this->table_name . 
                " WHERE email = ?";
        $stmt = $this->conn->prepare($query);
        $this->email = htmlspecialchars(strip_tags($this->email));
        $stmt->bindParam(1, $this->email);
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
              " WHERE email = :email";
        $stmt = $this->conn->prepare($query);
        sanitize();
        $stmt = bindValues($stmt);
        $stmt->execute();
        return $stmt;
    }
    
    private function buildQueryAttributes() {
      $res = "";
      if($this->email) {
        $res .= "email = :email";
      }
      if($this->password) {
        $res = $this->addComma($res);
        $res .= "password = :password";
      }
      if($this->username) {
        $res = $this->addComma($res);
        $res .= "username = :username";
      }
      if($this->nome) {
        $res = $this->addComma($res);
        $res .= "nome = :nome";
      }
      if($this->telefone) {
        $res = $this->addComma($res);
        $res .= "telefone = :telefone";
      }
      if($this->telemovel) {
        $res = $this->addComma($res);
        $res .= "telemovel = :telemovel";
      }
      if($this->morada) {
        $res = $this->addComma($res);
        $res .= "morada = :morada";
      }
      if($this->avatar) {
        $res = $this->addComma($res);
        $res .= "avatar = :avatar";
      }
      return $res;
    }
    
    private function sanitize() {
      if ($this->email) {
        $this->email=htmlspecialchars(strip_tags($this->email));
      }
      if ($this->password) {
        $this->password=htmlspecialchars(strip_tags($this->password));
      }
      if ($this->username) {
        $this->username=htmlspecialchars(strip_tags($this->username));
      }
      if ($this->nome) {
        $this->nome=htmlspecialchars(strip_tags($this->nome));
      }
      if ($this->telefone) {
        $this->telefone=htmlspecialchars(strip_tags($this->telefone));
      }
      if ($this->telemovel) {
        $this->telemovel=htmlspecialchars(strip_tags($this->telemovel));
      }
      if ($this->morada) {
        $this->morada=htmlspecialchars(strip_tags($this->morada));
      }
      if ($this->avatar) {
        $this->avatar=htmlspecialchars(strip_tags($this->avatar));
      }
    }
    
    private function bindValues($stmt) {
      if ($this->email) {
        $stmt->bindParam(":email", $this->email);
      }
      if ($this->password) {
        $stmt->bindParam(":password", $this->password);
      }
      if ($this->username) {
        $stmt->bindParam(":username", $this->username);
      }
      if ($this->nome) {
         $stmt->bindParam(":nome", $this->nome);
      }
      if ($this->telefone) {
         $stmt->bindParam(":telefone", $this->telefone);
      }
      if ($this->telemovel) {
        $stmt->bindParam(":telemovel", $this->telemovel);
      }
      if ($this->morada) {
        $stmt->bindParam(":morada", $this->morada);
      }
      if ($this->avatar) {
        $stmt->bindParam(":avatar", $this->avatar);
      }
      return $stmt;
    }
}
