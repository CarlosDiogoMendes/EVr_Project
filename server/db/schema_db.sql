CREATE OR REPLACE TABLE Cliente
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

CREATE OR REPLACE TABLE Membro 	# fornecedor/servico
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
	Localidade		 VARCHAR(35),
	Avatar    	     MEDIUMBLOB, 				# limitar o upload do avatar a 16MB
	NumTrabalhadores INTEGER(10) NOT NULL,
	ZonaOperacao     ENUM ('Regional','Nacional','Internacional') NOT NULL,
	Tipo 		     ENUM ('Jurídico','Logistico','Catering','Segurança','Limpeza','Técnico','Animações') NOT NULL,
	PRIMARY KEY (Email),
	FOREIGN KEY (Localidade, Cidade, Pais) REFERENCES Localidade(Nome, Cidade, Pais)
);

CREATE OR REPLACE TABLE Pais 
(
 	Codigo VARCHAR(4),
	Nome VARCHAR(32) NOT NULL UNIQUE,
 	Capital VARCHAR(35),
 	PRIMARY KEY (Codigo)
);

CREATE OR REPLACE TABLE Cidade
(
	Nome VARCHAR(35),
 	Pais VARCHAR(4),
 	PRIMARY KEY (Nome, Pais),
 	FOREIGN KEY (Pais) REFERENCES Pais(Codigo)
 );

CREATE OR REPLACE TABLE Localidade
(
	Nome VARCHAR(35),
	Cidade VARCHAR(35),
	Pais VARCHAR(4),
	PRIMARY KEY (Nome, Cidade, Pais),
	FOREIGN KEY (Cidade) REFERENCES Cidade(Nome),
	FOREIGN KEY (Pais) REFERENCES Pais(Codigo)
);

CREATE OR REPLACE TABLE EntidadePublica
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

CREATE OR REPLACE TABLE PedidoRegistoMembro
(
	EmailMembro	VARCHAR(255),
	PRIMARY KEY (EmailMembro),
	FOREIGN KEY (EmailMembro) REFERENCES Membro(Email)
);

CREATE OR REPLACE TABLE MensagemClienteMembro
(
	Id		 	INT(11) AUTO_INCREMENT,
	Emissor		VARCHAR(255),
	Recetor		VARCHAR(255),
	DataTempo	DATETIME NOT NULL,
	Mensagem    VARCHAR(20000),
	PRIMARY KEY (Id),
	FOREIGN KEY (Emissor) REFERENCES Cliente(Email),
	FOREIGN KEY (Recetor) REFERENCES Membro(Email)
);

CREATE OR REPLACE TABLE MensagemMembroMembro
(
	Id			INT(11) AUTO_INCREMENT,
	Emissor		VARCHAR(255),
	Recetor		VARCHAR(255),
	DataTempo	DATETIME NOT NULL,
	Mensagem    VARCHAR(20000),
	PRIMARY KEY (Id),
	FOREIGN KEY (Emissor) REFERENCES Membro(Email),
	FOREIGN KEY (Recetor) REFERENCES Membro(Email)
);

CREATE OR REPLACE TABLE MensagemMembroCliente
(
	Id			INT(11) AUTO_INCREMENT,
	Emissor		VARCHAR(255),
	Recetor		VARCHAR(255),
	DataTempo	DATETIME NOT NULL,
	Mensagem    VARCHAR(20000),
	PRIMARY KEY (Id),
	FOREIGN KEY (Emissor) REFERENCES Membro(Email),
	FOREIGN KEY (Recetor) REFERENCES Cliente(Email)
);

CREATE OR REPLACE TABLE Festival
(
	Id			INT(11) AUTO_INCREMENT,
	Nome		VARCHAR(255) NOT NULL,
	Pais        VARCHAR(4) NOT NULL, 
	Cidade      VARCHAR(35) NOT NULL,
	Localidade 	VARCHAR(35) NOT NULL,
	DataInicio	DATE NOT NULL,
	DataFim		DATE NOT NULL,
	Imagem		MEDIUMBLOB,
	PRIMARY KEY (Id),
	FOREIGN KEY (Localidade, Cidade, Pais) REFERENCES Localidade(Nome, Cidade, Pais)
);

CREATE OR REPLACE TABLE OrganizacaoVirtual
(
	IdFestival		INT(11),
	EmailCliente	VARCHAR(255),
	EmailMembro		VARCHAR(255),
	PRIMARY KEY (IdFestival, EmailCliente, EmailMembro),
	FOREIGN KEY (IdFestival) REFERENCES Festival(Id),
	FOREIGN KEY (EmailCliente) REFERENCES Cliente(Email),
	FOREIGN KEY (EmailMembro) REFERENCES Membro(Email) 
);

CREATE OR REPLACE TABLE Tarefa
(
	Id 				INT(11) AUTO_INCREMENT,
	Tipo			VARCHAR(255) NOT NULL,
	DataTempoInicio	DATETIME NOT NULL,
	DataTempoFim	DATETIME NOT NULL,
	Festival 		INT(11),
	Coordenador		VARCHAR(255),
	Responsavel 	VARCHAR(255),
	Estado 			ENUM('Completa', 'Incompleta', 'Cancelada') NOT NULL,
	PRIMARY KEY (Id),
	FOREIGN KEY (Festival, Coordenador, Responsavel) REFERENCES OrganizacaoVirtual(IdFestival, EmailCliente, EmailMembro)
);

CREATE OR REPLACE TABLE NoticiaCliente
(
	Id 			INT(11) AUTO_INCREMENT,
	DataTempo	DATETIME NOT NULL,
	Conteudo 	VARCHAR(20000) NOT NULL,
	Autor 		VARCHAR(255),
	PRIMARY KEY (Id),
	FOREIGN KEY (Autor) REFERENCES Cliente(Email)
);

CREATE OR REPLACE TABLE NoticiaMembro
(
	Id 			INT(11) AUTO_INCREMENT,
	DataTempo	DATETIME NOT NULL,
	Conteudo 	VARCHAR(20000) NOT NULL,
	Autor 		VARCHAR(255),
	PRIMARY KEY (Id),
	FOREIGN KEY (Autor) REFERENCES Membro(Email)
);

CREATE OR REPLACE TABLE FeedbackOrganizacaoVirtual
(
	Festival 		INT(11),
	EmailAvaliador	VARCHAR(255),
	EmailAvaliado	VARCHAR(255),
	Classificacao	ENUM('1','2','3','4','5') NOT NULL,
	PRIMARY KEY (Festival, EmailAvaliador, EmailAvaliado),
	FOREIGN KEY (Festival, EmailAvaliador, EmailAvaliado) REFERENCES OrganizacaoVirtual(IdFestival, EmailCliente, EmailMembro)

);

CREATE OR REPLACE TABLE FeedbackTarefa
(
	Tarefa 			INT(11),
	EmailAvaliador	VARCHAR(255),
	EmailAvaliado	VARCHAR(255),
	Classificacao	ENUM('1','2','3','4','5') NOT NULL,
	PRIMARY KEY (Tarefa, EmailAvaliador, EmailAvaliado),
	FOREIGN KEY (Tarefa) REFERENCES Tarefa(Id),
	FOREIGN KEY (EmailAvaliador) REFERENCES Cliente(Email),
	FOREIGN KEY (EmailAvaliado) REFERENCES Membro(Email)
);

CREATE OR REPLACE TABLE Imagem
(
	Id 				INT(11) AUTO_INCREMENT,
	Imagem 			LONGBLOB,
	PRIMARY KEY (Id)
);