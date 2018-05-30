CREATE TABLE IF NOT EXISTS Cliente
(
	Email       VARCHAR(255),
	Password    VARCHAR(255) NOT NULL,
	Username    VARCHAR(255) NOT NULL UNIQUE,
	Nome  		VARCHAR(255) NOT NULL,
	Telefone    VARCHAR(20) NOT NULL,
	Telemovel   VARCHAR(20) NOT NULL,
	Morada      VARCHAR(255) NOT NULL,
	Avatar      MEDIUMBLOB, 				# limitar o upload do avatar a 16MB
	PRIMARY KEY (Email)
);

CREATE TABLE IF NOT EXISTS Membro 	# fornecedor/servico
(
	Email            VARCHAR(255),
	Password         VARCHAR(255) NOT NULL,
	Username         VARCHAR(255) NOT NULL UNIQUE,
	Nome             VARCHAR(255) NOT NULL,
	Telefone    	 VARCHAR(20) NOT NULL,
	Telemovel   	 VARCHAR(20) NOT NULL,
	Fax   			 VARCHAR(20),
	Pais             VARCHAR(4), 
	Cidade           VARCHAR(35),
	Avatar    	     MEDIUMBLOB,
	NumTrabalhadores INTEGER(10) NOT NULL,
	ZonaOperacao     ENUM ('Regional','Nacional','Internacional') NOT NULL,
	Tipo 		     ENUM ('Jurídico','Logistico','Catering','Segurança','Limpeza','Técnico','Animações') NOT NULL,
	PRIMARY KEY (Email),
	FOREIGN KEY (Pais) REFERENCES Pais(Codigo),
	FOREIGN KEY (Cidade, Pais) REFERENCES Cidade(Nome, Pais)
);

CREATE TABLE IF NOT EXISTS Pais 
(
 	Codigo VARCHAR(4),
	Nome VARCHAR(32) NOT NULL UNIQUE,
 	Capital VARCHAR(35),
 	Area INTEGER(10),
 	Populacao INTEGER(10),
 	PRIMARY KEY (Codigo)
);

CREATE TABLE IF NOT EXISTS Cidade
(
	Nome VARCHAR(35),
 	Pais VARCHAR(4),
 	Populacao INTEGER,
 	Longitude INTEGER,
 	Latitude INTEGER,
 	PRIMARY KEY (Nome, Pais)
 );

CREATE TABLE IF NOT EXISTS EntidadePublica
(
	Nome		VARCHAR(255) NOT NULL,
	Contacto	VARCHAR(20) NOT NULL,
	Pais        VARCHAR(4) NOT NULL, 
	Cidade 		VARCHAR(35) NOT NULL,
	Tipo 		ENUM ('Autoridade','Bombeiro','Paramédico') NOT NULL,
	PRIMARY KEY (Contacto),
	FOREIGN KEY (Pais) REFERENCES Pais(Codigo),
	FOREIGN KEY (Cidade, Pais) REFERENCES Cidade(Nome, Pais)
);