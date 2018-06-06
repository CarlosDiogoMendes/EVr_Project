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
	Avatar    	     MEDIUMBLOB, 				# limitar o upload do avatar a 16MB
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

CREATE TABLE IF NOT EXISTS PedidoRegistoMembro
(
	EmailMembro	VARCHAR(255),
	PRIMARY KEY (EmailMembro),
	FOREIGN KEY (EmailMembro) REFERENCES Membro(Email)
);

CREATE TABLE IF NOT EXISTS MensagemClienteMembro
(
	Id		 	INT(11) AUTO_INCREMENT,
	Emissor		VARCHAR(255),
	Recetor		VARCHAR(255),
	Tempo		TIMESTAMP NOT NULL,
	Mensagem    VARCHAR(20000),
	PRIMARY KEY (Id),
	FOREIGN KEY (Emissor) REFERENCES Cliente(Email),
	FOREIGN KEY (Recetor) REFERENCES Membro(Email)
);

CREATE TABLE IF NOT EXISTS MensagemMembroMembro
(
	Id			INT(11) AUTO_INCREMENT,
	Emissor		VARCHAR(255),
	Recetor		VARCHAR(255),
	Tempo		TIMESTAMP NOT NULL,
	Mensagem    VARCHAR(20000),
	PRIMARY KEY (Id),
	FOREIGN KEY (Emissor) REFERENCES Membro(Email),
	FOREIGN KEY (Recetor) REFERENCES Membro(Email)
);

CREATE TABLE IF NOT EXISTS MensagemMembroCliente
(
	Id			INT(11) AUTO_INCREMENT,
	Emissor		VARCHAR(255),
	Recetor		VARCHAR(255),
	Tempo		TIMESTAMP NOT NULL,
	Mensagem    VARCHAR(20000),
	PRIMARY KEY (Id),
	FOREIGN KEY (Emissor) REFERENCES Membro(Email),
	FOREIGN KEY (Recetor) REFERENCES Cliente(Email)
);

CREATE TABLE IF NOT EXISTS Festival
(
	Id			INT(11) AUTO_INCREMENT,
	Nome		VARCHAR(255) NOT NULL,
	Pais        VARCHAR(4) NOT NULL, 
	Cidade      VARCHAR(35) NOT NULL,
	Data		DATE NOT NULL,
	Imagem		MEDIUMBLOB,
	PRIMARY KEY (Id),
	FOREIGN KEY (Cidade, Pais) REFERENCES Cidade(Nome, Pais)
);

CREATE TABLE IF NOT EXISTS OrganizacaoVirtual
(
	IdFestival		INT(11),
	EmailCliente	VARCHAR(255),
	EmailMembro		VARCHAR(255),
	PRIMARY KEY (IdFestival, EmailCliente, EmailMembro),
	FOREIGN KEY (IdFestival) REFERENCES Festival(Id),
	FOREIGN KEY (EmailCliente) REFERENCES Cliente(Email),
	FOREIGN KEY (EmailMembro) REFERENCES Membro(Email) 
);

CREATE TABLE IF NOT EXISTS Tarefa
(
	Id 			INT(11) AUTO_INCREMENT,
	Tipo		VARCHAR(255) NOT NULL,
	DataInicio	TIMESTAMP NOT NULL,
	DataFim		TIMESTAMP NOT NULL,
	Festival 	INT(11),
	Coordenador	VARCHAR(255),
	Responsavel VARCHAR(255),
	Estado 		ENUM('Completa', 'Incompleta', 'Cancelada') NOT NULL,
	PRIMARY KEY (Id),
	FOREIGN KEY (Festival, Coordenador, Responsavel) REFERENCES OrganizacaoVirtual(IdFestival, EmailCliente, EmailMembro)
);

CREATE TABLE IF NOT EXISTS NoticiaCliente
(
	Id 			INT(11) AUTO_INCREMENT,
	Tempo		TIMESTAMP NOT NULL,
	Conteudo 	VARCHAR(20000) NOT NULL,
	Autor 		VARCHAR(255),
	PRIMARY KEY (Id),
	FOREIGN KEY (Autor) REFERENCES Cliente(Email)
);

CREATE TABLE IF NOT EXISTS NoticiaMembro
(
	Id 			INT(11) AUTO_INCREMENT,
	Tempo		TIMESTAMP NOT NULL,
	Conteudo 	VARCHAR(20000) NOT NULL,
	Autor 		VARCHAR(255),
	PRIMARY KEY (Id),
	FOREIGN KEY (Autor) REFERENCES Membro(Email)
);

CREATE TABLE IF NOT EXISTS FeedbackOrganizacaoVirtual
(
	Festival 		INT(11),
	EmailAvaliador	VARCHAR(255),
	EmailAvaliado	VARCHAR(255),
	Classificacao	ENUM('1','2','3','4','5') NOT NULL,
	PRIMARY KEY (Festival, EmailAvaliador, EmailAvaliado),
	FOREIGN KEY (Festival, EmailAvaliador, EmailAvaliado) REFERENCES OrganizacaoVirtual(IdFestival, EmailCliente, EmailMembro)

);

CREATE TABLE IF NOT EXISTS FeedbackTarefa
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