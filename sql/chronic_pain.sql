-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 06 mai 2024 à 11:06
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `chronic_pain`
--

-- --------------------------------------------------------

--
-- Structure de la table `newpain`
--

CREATE TABLE `newpain` (
  `ID` int(11) NOT NULL,
  `ID_user` int(11) NOT NULL,
  `ID_pain_beginning` int(11) NOT NULL,
  `pain_intensity` int(11) NOT NULL,
  `ID_temporal_pattern` int(11) NOT NULL,
  `pain_related_distress` int(11) NOT NULL,
  `pain_related_interference` int(11) NOT NULL,
  `ID_pain_location` int(11) NOT NULL,
  `cancer` int(11) NOT NULL,
  `cancer_treatment` int(11) NOT NULL,
  `begin_after_surgery` int(11) NOT NULL,
  `worse_after_surgery` int(11) NOT NULL,
  `spread_of_pain` int(11) NOT NULL,
  `area_of_surgery` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `newpain`
--

INSERT INTO `newpain` (`ID`, `ID_user`, `ID_pain_beginning`, `pain_intensity`, `ID_temporal_pattern`, `pain_related_distress`, `pain_related_interference`, `ID_pain_location`, `cancer`, `cancer_treatment`, `begin_after_surgery`, `worse_after_surgery`, `spread_of_pain`, `area_of_surgery`) VALUES
(8, 24, 0, 6, 1, 3, 9, 0, 0, 0, 0, 1, 0, 0),
(9, 25, 2, 4, 1, 6, 1, 0, 0, 0, 0, 0, 1, 1),
(10, 25, 2, 5, 1, 2, 7, 0, 0, 0, 0, 1, 0, 0),
(11, 27, 0, 0, 1, 1, 4, 0, 0, 0, 0, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `pain_beginning`
--

CREATE TABLE `pain_beginning` (
  `ID` int(11) NOT NULL,
  `pain_beginning` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `pain_beginning`
--

INSERT INTO `pain_beginning` (`ID`, `pain_beginning`) VALUES
(0, '0-2 months'),
(1, '2-3 months'),
(2, '3-6 months'),
(3, '6-12 months'),
(4, 'more than 12 months');

-- --------------------------------------------------------

--
-- Structure de la table `pain_location`
--

CREATE TABLE `pain_location` (
  `ID` int(11) NOT NULL,
  `pain_location` varchar(100) NOT NULL,
  `coordinates` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `pain_location`
--

INSERT INTO `pain_location` (`ID`, `pain_location`, `coordinates`) VALUES
(0, 'Head', '65,15,65,65,105,65,105,15'),
(1, 'Left arm', '115,75,115,225,165,225,165,75'),
(2, 'Right arm', '0,75,0,225,50,225,50,75'),
(3, 'Left leg', '82,175,82,375,115,375,115,175'),
(4, 'Right leg', '50,175,50,375,82,375,82,175'),
(5, 'Body', '50,65,50,175,115,175,115,65');

-- --------------------------------------------------------

--
-- Structure de la table `temporal_pattern`
--

CREATE TABLE `temporal_pattern` (
  `ID` int(11) NOT NULL,
  `temporal_pattern` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `temporal_pattern`
--

INSERT INTO `temporal_pattern` (`ID`, `temporal_pattern`, `image`) VALUES
(0, 'Persistent', 'sources/images/persistent.jpg'),
(1, 'Recurring with pain-free intervals', 'sources/images/recurring.jpg'),
(2, 'Persistent with overlapping pain attacks', 'sources/images/overlapping.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `userinformation`
--

CREATE TABLE `userinformation` (
  `ID` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `birthdate` date NOT NULL,
  `adress` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `userinformation`
--

INSERT INTO `userinformation` (`ID`, `first_name`, `last_name`, `email`, `phone_number`, `birthdate`, `adress`, `password`) VALUES
(24, 'Eden', 'Hazard', 'mael.rimeur@isen-ouest.yncrea.fr', '', '2024-01-17', '', '$2y$10$QmFQkNCoZsRkDSB9Gg0y5.1fNddatcGP6H2fFaroAVAtTVMHd1Cr6'),
(25, 'Mael', 'Rimeur', 'mael.rimeur@gmail.com', '', '2024-05-15', '', '$2y$10$dHNERNNsbBynBzj3AbdLrufEbNzutpwCnEIFN83F09EaEmSFVl1Ym'),
(26, 'Mael', 'Rimeur', 'mael.rimeur@gmail.com', '', '2024-05-06', '', '$2y$10$ucVDHC8Si/9/mJ15jGelIeVsBQAIcnnYTpmzWrUVdZIl2TigIXFAW'),
(27, 'Elouen', 'Pont', 'elouenpont@gmail.com', '', '2024-05-02', '', '$2y$10$nrlOAF.Q3k0gQkuMc8L1JeHlwBSCdJFDOzXJe2tYwhDsaEBZAM2Re');

-- --------------------------------------------------------

--
-- Structure de la table `yesorno_questions`
--

CREATE TABLE `yesorno_questions` (
  `ID` int(11) NOT NULL,
  `response` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `yesorno_questions`
--

INSERT INTO `yesorno_questions` (`ID`, `response`) VALUES
(0, 'Yes'),
(1, 'No');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `newpain`
--
ALTER TABLE `newpain`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_description_pain` (`pain_intensity`),
  ADD KEY `fk_pain_location` (`ID_pain_location`),
  ADD KEY `fk_pain_related_distress` (`pain_related_distress`),
  ADD KEY `fk_pain_related_interference` (`pain_related_interference`),
  ADD KEY `fk_temporal_pattern` (`ID_temporal_pattern`),
  ADD KEY `fk_cancer` (`cancer`),
  ADD KEY `fk_treatment` (`cancer_treatment`),
  ADD KEY `fk_area_of_surgery` (`area_of_surgery`),
  ADD KEY `fk_begin_after_surgery` (`begin_after_surgery`),
  ADD KEY `fk_worse_after_surgery` (`worse_after_surgery`),
  ADD KEY `fk_spread_of_pain` (`spread_of_pain`),
  ADD KEY `fk_pain_beginning` (`ID_pain_beginning`),
  ADD KEY `fk_userID` (`ID_user`);

--
-- Index pour la table `pain_beginning`
--
ALTER TABLE `pain_beginning`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `pain_location`
--
ALTER TABLE `pain_location`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `temporal_pattern`
--
ALTER TABLE `temporal_pattern`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `userinformation`
--
ALTER TABLE `userinformation`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `yesorno_questions`
--
ALTER TABLE `yesorno_questions`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `newpain`
--
ALTER TABLE `newpain`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `userinformation`
--
ALTER TABLE `userinformation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `newpain`
--
ALTER TABLE `newpain`
  ADD CONSTRAINT `fk_area_of_surgery` FOREIGN KEY (`area_of_surgery`) REFERENCES `yesorno_questions` (`ID`),
  ADD CONSTRAINT `fk_begin_after_surgery` FOREIGN KEY (`begin_after_surgery`) REFERENCES `yesorno_questions` (`ID`),
  ADD CONSTRAINT `fk_cancer` FOREIGN KEY (`cancer`) REFERENCES `yesorno_questions` (`ID`),
  ADD CONSTRAINT `fk_pain_beginning` FOREIGN KEY (`ID_pain_beginning`) REFERENCES `pain_beginning` (`ID`),
  ADD CONSTRAINT `fk_pain_location` FOREIGN KEY (`ID_pain_location`) REFERENCES `pain_location` (`ID`),
  ADD CONSTRAINT `fk_spread_of_pain` FOREIGN KEY (`spread_of_pain`) REFERENCES `yesorno_questions` (`ID`),
  ADD CONSTRAINT `fk_temporal_pattern` FOREIGN KEY (`ID_temporal_pattern`) REFERENCES `temporal_pattern` (`ID`),
  ADD CONSTRAINT `fk_treatment` FOREIGN KEY (`cancer_treatment`) REFERENCES `yesorno_questions` (`ID`),
  ADD CONSTRAINT `fk_userID` FOREIGN KEY (`ID_user`) REFERENCES `userinformation` (`ID`),
  ADD CONSTRAINT `fk_worse_after_surgery` FOREIGN KEY (`worse_after_surgery`) REFERENCES `yesorno_questions` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;