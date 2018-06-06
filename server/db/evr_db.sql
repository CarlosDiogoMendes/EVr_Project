-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06-Jun-2018 às 15:01
-- Versão do servidor: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evr_db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cidade`
--

CREATE TABLE `cidade` (
  `Nome` varchar(35) NOT NULL,
  `Pais` varchar(4) NOT NULL,
  `Populacao` int(11) DEFAULT NULL,
  `Longitude` int(11) DEFAULT NULL,
  `Latitude` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cidade`
--

INSERT INTO `cidade` (`Nome`, `Pais`, `Populacao`, `Longitude`, `Latitude`) VALUES
('Almada', 'P', 42607, NULL, NULL),
('Amadora', 'P', 95518, NULL, NULL),
('Barreiro', 'P', 50863, NULL, NULL),
('Braga', 'P', 63033, NULL, NULL),
('Coimbra', 'P', 74616, NULL, NULL),
('Funchal', 'P', 44111, NULL, NULL),
('Lisboa', 'P', 807937, -9, 39),
('Porto', 'P', 327368, NULL, NULL),
('Setubal', 'P', 77885, NULL, NULL),
('Vila Nova de Gaia', 'P', 62468, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Telefone` varchar(20) NOT NULL,
  `Telemovel` varchar(20) NOT NULL,
  `Morada` varchar(255) NOT NULL,
  `Avatar` mediumblob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`Email`, `Password`, `Username`, `Nome`, `Telefone`, `Telemovel`, `Morada`, `Avatar`) VALUES
('admin', 'admin', 'admin', 'admin', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `entidadepublica`
--

CREATE TABLE `entidadepublica` (
  `Nome` varchar(255) NOT NULL,
  `Contacto` varchar(20) NOT NULL,
  `Pais` varchar(4) NOT NULL,
  `Cidade` varchar(35) NOT NULL,
  `Tipo` enum('Autoridade','Bombeiro','Paramédico') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `entidadepublica`
--

INSERT INTO `entidadepublica` (`Nome`, `Contacto`, `Pais`, `Cidade`, `Tipo`) VALUES
('Bombeiros Voluntários da Trafaria', '+351 212 950 093', 'P', 'Almada', 'Bombeiro'),
('INEM', '+351 213 508 100', 'P', 'Lisboa', 'Paramédico'),
('GNR Posto Territorial de Trafaria', '+351 265 242 596', 'P', 'Almada', 'Autoridade'),
('Policia Municipal de Lisboa', '+351 808 202 036', 'P', 'Lisboa', 'Autoridade');

-- --------------------------------------------------------

--
-- Estrutura da tabela `feedbackorganizacaovirtual`
--

CREATE TABLE `feedbackorganizacaovirtual` (
  `Festival` int(11) NOT NULL,
  `EmailAvaliador` varchar(255) NOT NULL,
  `EmailAvaliado` varchar(255) NOT NULL,
  `Classificacao` enum('1','2','3','4','5') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `feedbacktarefa`
--

CREATE TABLE `feedbacktarefa` (
  `Tarefa` int(11) NOT NULL,
  `EmailAvaliador` varchar(255) NOT NULL,
  `EmailAvaliado` varchar(255) NOT NULL,
  `Classificacao` enum('1','2','3','4','5') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `festival`
--

CREATE TABLE `festival` (
  `Id` int(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Pais` varchar(4) NOT NULL,
  `Cidade` varchar(35) NOT NULL,
  `Data` date NOT NULL,
  `Imagem` mediumblob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `membro`
--

CREATE TABLE `membro` (
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Telefone` varchar(20) NOT NULL,
  `Telemovel` varchar(20) NOT NULL,
  `Fax` varchar(20) DEFAULT NULL,
  `Pais` varchar(4) DEFAULT NULL,
  `Cidade` varchar(35) DEFAULT NULL,
  `Avatar` mediumblob,
  `NumTrabalhadores` int(10) NOT NULL,
  `ZonaOperacao` enum('Regional','Nacional','Internacional') NOT NULL,
  `Tipo` enum('Jurídico','Logistico','Catering','Segurança','Limpeza','Técnico','Animações') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagemclientemembro`
--

CREATE TABLE `mensagemclientemembro` (
  `Id` int(11) NOT NULL,
  `Emissor` varchar(255) DEFAULT NULL,
  `Recetor` varchar(255) DEFAULT NULL,
  `Tempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Mensagem` varchar(20000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagemmembrocliente`
--

CREATE TABLE `mensagemmembrocliente` (
  `Id` int(11) NOT NULL,
  `Emissor` varchar(255) DEFAULT NULL,
  `Recetor` varchar(255) DEFAULT NULL,
  `Tempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Mensagem` varchar(20000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagemmembromembro`
--

CREATE TABLE `mensagemmembromembro` (
  `Id` int(11) NOT NULL,
  `Emissor` varchar(255) DEFAULT NULL,
  `Recetor` varchar(255) DEFAULT NULL,
  `Tempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Mensagem` varchar(20000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticiacliente`
--

CREATE TABLE `noticiacliente` (
  `Id` int(11) NOT NULL,
  `Tempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Conteudo` varchar(20000) NOT NULL,
  `Autor` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `noticiamembro`
--

CREATE TABLE `noticiamembro` (
  `Id` int(11) NOT NULL,
  `Tempo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Conteudo` varchar(20000) NOT NULL,
  `Autor` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `organizacaovirtual`
--

CREATE TABLE `organizacaovirtual` (
  `IdFestival` int(11) NOT NULL,
  `EmailCliente` varchar(255) NOT NULL,
  `EmailMembro` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pais`
--

CREATE TABLE `pais` (
  `Codigo` varchar(4) NOT NULL,
  `Nome` varchar(32) NOT NULL,
  `Capital` varchar(35) DEFAULT NULL,
  `Area` int(10) DEFAULT NULL,
  `Populacao` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pais`
--

INSERT INTO `pais` (`Codigo`, `Nome`, `Capital`, `Area`, `Populacao`) VALUES
('P', 'Portugal', 'Lisboa', 92080, 9865114);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidoregistomembro`
--

CREATE TABLE `pedidoregistomembro` (
  `EmailMembro` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefa`
--

CREATE TABLE `tarefa` (
  `Id` int(11) NOT NULL,
  `Tipo` varchar(255) NOT NULL,
  `DataInicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `DataFim` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Festival` int(11) DEFAULT NULL,
  `Coordenador` varchar(255) DEFAULT NULL,
  `Responsavel` varchar(255) DEFAULT NULL,
  `Estado` enum('Completa','Incompleta','Cancelada') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cidade`
--
ALTER TABLE `cidade`
  ADD PRIMARY KEY (`Nome`,`Pais`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`Email`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indexes for table `entidadepublica`
--
ALTER TABLE `entidadepublica`
  ADD PRIMARY KEY (`Contacto`),
  ADD KEY `Pais` (`Pais`),
  ADD KEY `Cidade` (`Cidade`,`Pais`);

--
-- Indexes for table `feedbackorganizacaovirtual`
--
ALTER TABLE `feedbackorganizacaovirtual`
  ADD PRIMARY KEY (`Festival`,`EmailAvaliador`,`EmailAvaliado`);

--
-- Indexes for table `feedbacktarefa`
--
ALTER TABLE `feedbacktarefa`
  ADD PRIMARY KEY (`Tarefa`,`EmailAvaliador`,`EmailAvaliado`),
  ADD KEY `EmailAvaliador` (`EmailAvaliador`),
  ADD KEY `EmailAvaliado` (`EmailAvaliado`);

--
-- Indexes for table `festival`
--
ALTER TABLE `festival`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Cidade` (`Cidade`,`Pais`);

--
-- Indexes for table `membro`
--
ALTER TABLE `membro`
  ADD PRIMARY KEY (`Email`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD KEY `Pais` (`Pais`),
  ADD KEY `Cidade` (`Cidade`,`Pais`);

--
-- Indexes for table `mensagemclientemembro`
--
ALTER TABLE `mensagemclientemembro`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Emissor` (`Emissor`),
  ADD KEY `Recetor` (`Recetor`);

--
-- Indexes for table `mensagemmembrocliente`
--
ALTER TABLE `mensagemmembrocliente`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Emissor` (`Emissor`),
  ADD KEY `Recetor` (`Recetor`);

--
-- Indexes for table `mensagemmembromembro`
--
ALTER TABLE `mensagemmembromembro`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Emissor` (`Emissor`),
  ADD KEY `Recetor` (`Recetor`);

--
-- Indexes for table `noticiacliente`
--
ALTER TABLE `noticiacliente`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Autor` (`Autor`);

--
-- Indexes for table `noticiamembro`
--
ALTER TABLE `noticiamembro`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Autor` (`Autor`);

--
-- Indexes for table `organizacaovirtual`
--
ALTER TABLE `organizacaovirtual`
  ADD PRIMARY KEY (`IdFestival`,`EmailCliente`,`EmailMembro`),
  ADD KEY `EmailCliente` (`EmailCliente`),
  ADD KEY `EmailMembro` (`EmailMembro`);

--
-- Indexes for table `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`Codigo`),
  ADD UNIQUE KEY `Nome` (`Nome`);

--
-- Indexes for table `pedidoregistomembro`
--
ALTER TABLE `pedidoregistomembro`
  ADD PRIMARY KEY (`EmailMembro`);

--
-- Indexes for table `tarefa`
--
ALTER TABLE `tarefa`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Festival` (`Festival`,`Coordenador`,`Responsavel`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `festival`
--
ALTER TABLE `festival`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mensagemclientemembro`
--
ALTER TABLE `mensagemclientemembro`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mensagemmembrocliente`
--
ALTER TABLE `mensagemmembrocliente`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mensagemmembromembro`
--
ALTER TABLE `mensagemmembromembro`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `noticiacliente`
--
ALTER TABLE `noticiacliente`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `noticiamembro`
--
ALTER TABLE `noticiamembro`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tarefa`
--
ALTER TABLE `tarefa`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `entidadepublica`
--
ALTER TABLE `entidadepublica`
  ADD CONSTRAINT `entidadepublica_ibfk_1` FOREIGN KEY (`Pais`) REFERENCES `pais` (`Codigo`),
  ADD CONSTRAINT `entidadepublica_ibfk_2` FOREIGN KEY (`Cidade`,`Pais`) REFERENCES `cidade` (`Nome`, `Pais`);

--
-- Limitadores para a tabela `feedbackorganizacaovirtual`
--
ALTER TABLE `feedbackorganizacaovirtual`
  ADD CONSTRAINT `feedbackorganizacaovirtual_ibfk_1` FOREIGN KEY (`Festival`,`EmailAvaliador`,`EmailAvaliado`) REFERENCES `organizacaovirtual` (`IdFestival`, `EmailCliente`, `EmailMembro`);

--
-- Limitadores para a tabela `feedbacktarefa`
--
ALTER TABLE `feedbacktarefa`
  ADD CONSTRAINT `feedbacktarefa_ibfk_1` FOREIGN KEY (`Tarefa`) REFERENCES `tarefa` (`Id`),
  ADD CONSTRAINT `feedbacktarefa_ibfk_2` FOREIGN KEY (`EmailAvaliador`) REFERENCES `cliente` (`Email`),
  ADD CONSTRAINT `feedbacktarefa_ibfk_3` FOREIGN KEY (`EmailAvaliado`) REFERENCES `membro` (`Email`);

--
-- Limitadores para a tabela `festival`
--
ALTER TABLE `festival`
  ADD CONSTRAINT `festival_ibfk_1` FOREIGN KEY (`Cidade`,`Pais`) REFERENCES `cidade` (`Nome`, `Pais`);

--
-- Limitadores para a tabela `membro`
--
ALTER TABLE `membro`
  ADD CONSTRAINT `membro_ibfk_1` FOREIGN KEY (`Pais`) REFERENCES `pais` (`Codigo`),
  ADD CONSTRAINT `membro_ibfk_2` FOREIGN KEY (`Cidade`,`Pais`) REFERENCES `cidade` (`Nome`, `Pais`);

--
-- Limitadores para a tabela `mensagemclientemembro`
--
ALTER TABLE `mensagemclientemembro`
  ADD CONSTRAINT `mensagemclientemembro_ibfk_1` FOREIGN KEY (`Emissor`) REFERENCES `cliente` (`Email`),
  ADD CONSTRAINT `mensagemclientemembro_ibfk_2` FOREIGN KEY (`Recetor`) REFERENCES `membro` (`Email`);

--
-- Limitadores para a tabela `mensagemmembrocliente`
--
ALTER TABLE `mensagemmembrocliente`
  ADD CONSTRAINT `mensagemmembrocliente_ibfk_1` FOREIGN KEY (`Emissor`) REFERENCES `membro` (`Email`),
  ADD CONSTRAINT `mensagemmembrocliente_ibfk_2` FOREIGN KEY (`Recetor`) REFERENCES `cliente` (`Email`);

--
-- Limitadores para a tabela `mensagemmembromembro`
--
ALTER TABLE `mensagemmembromembro`
  ADD CONSTRAINT `mensagemmembromembro_ibfk_1` FOREIGN KEY (`Emissor`) REFERENCES `membro` (`Email`),
  ADD CONSTRAINT `mensagemmembromembro_ibfk_2` FOREIGN KEY (`Recetor`) REFERENCES `membro` (`Email`);

--
-- Limitadores para a tabela `noticiacliente`
--
ALTER TABLE `noticiacliente`
  ADD CONSTRAINT `noticiacliente_ibfk_1` FOREIGN KEY (`Autor`) REFERENCES `cliente` (`Email`);

--
-- Limitadores para a tabela `noticiamembro`
--
ALTER TABLE `noticiamembro`
  ADD CONSTRAINT `noticiamembro_ibfk_1` FOREIGN KEY (`Autor`) REFERENCES `membro` (`Email`);

--
-- Limitadores para a tabela `organizacaovirtual`
--
ALTER TABLE `organizacaovirtual`
  ADD CONSTRAINT `organizacaovirtual_ibfk_1` FOREIGN KEY (`IdFestival`) REFERENCES `festival` (`Id`),
  ADD CONSTRAINT `organizacaovirtual_ibfk_2` FOREIGN KEY (`EmailCliente`) REFERENCES `cliente` (`Email`),
  ADD CONSTRAINT `organizacaovirtual_ibfk_3` FOREIGN KEY (`EmailMembro`) REFERENCES `membro` (`Email`);

--
-- Limitadores para a tabela `pedidoregistomembro`
--
ALTER TABLE `pedidoregistomembro`
  ADD CONSTRAINT `pedidoregistomembro_ibfk_1` FOREIGN KEY (`EmailMembro`) REFERENCES `membro` (`Email`);

--
-- Limitadores para a tabela `tarefa`
--
ALTER TABLE `tarefa`
  ADD CONSTRAINT `tarefa_ibfk_1` FOREIGN KEY (`Festival`,`Coordenador`,`Responsavel`) REFERENCES `organizacaovirtual` (`IdFestival`, `EmailCliente`, `EmailMembro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
