-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 01-Jun-2018 às 17:49
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
-- Indexes for table `membro`
--
ALTER TABLE `membro`
  ADD PRIMARY KEY (`Email`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD KEY `Pais` (`Pais`),
  ADD KEY `Cidade` (`Cidade`,`Pais`);

--
-- Indexes for table `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`Codigo`),
  ADD UNIQUE KEY `Nome` (`Nome`);

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
-- Limitadores para a tabela `membro`
--
ALTER TABLE `membro`
  ADD CONSTRAINT `membro_ibfk_1` FOREIGN KEY (`Pais`) REFERENCES `pais` (`Codigo`),
  ADD CONSTRAINT `membro_ibfk_2` FOREIGN KEY (`Cidade`,`Pais`) REFERENCES `cidade` (`Nome`, `Pais`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
