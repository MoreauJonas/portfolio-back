CREATE DATABASE  IF NOT EXISTS `portfolio` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `portfolio`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Projet de groupe'),(2,'Hackathon'),(3,'GameJam');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `formation`
--

LOCK TABLES `formation` WRITE;
/*!40000 ALTER TABLE `formation` DISABLE KEYS */;
INSERT INTO `formation` VALUES (1,'Developpeur Web','La Wild Code School propose des formations intensives aux métiers tech - Développement web, Data analyse, Cybersécurité, Product management - sur campus, à distance ou en entreprise.',NULL,'Le programme de notre formation Développeur web est très intensif et repose avant tout sur la pratique ! L\'apprentissage se base sur le développement de sites internet interactifs qui utilisent les technologies  HTML, CSS et JavaScript. Ainsi, grâce à l’expertise de nos formateurs dédiés et à notre pédagogie hybride basée sur une plateforme pédagogique en ligne et la réalisation de plusieurs projets professionnels, vous allez rapidement acquérir les bases du développement web et la maîtrise des langages informatiques et frameworks suivants : React/NodeJS, PHP/Symfony, Java/Angular, C#/ASP.Net, ou Python/Django. À la fin de votre formation, vous aurez réalisé plusieurs projets professionnalisants (projets partenaires, hackathons, quêtes etc…) dont certains pour des entreprises réelles, qui alimenteront le portfolio que vous présenterez à de potentiels recruteurs.',1),(2,'Master 1: Histoire Géographie (métier de l\'enseignement)','Apprentissage du \"savoir être\" et des méthodes de pédagogie.',NULL,NULL,1);
/*!40000 ALTER TABLE `formation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'HTML',NULL,1),(2,'CSS',NULL,1),(3,'JavaScript',NULL,1),(4,'React.js',NULL,1),(5,'Node.js',NULL,1),(6,'Express',NULL,1),(7,'MySQL',NULL,1),(8,'Workbench',NULL,1),(9,'GitHub',NULL,1),(10,'Visual Studio Code',NULL,1),(11,'Scss',NULL,1);
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `languages_has_projects`
--