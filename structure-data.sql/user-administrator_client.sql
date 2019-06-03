-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: user-administrator
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `client` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_on` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `update_on` datetime DEFAULT NULL,
  `fk_localization` bigint(20) DEFAULT NULL,
  `fk_store` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsv7i0tldvr6t2081rbsna8jv8` (`fk_localization`),
  KEY `FK5rsfxog9i24ar2cu177qa4iun` (`fk_store`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'2019-06-02 03:24:14','caren@email.com','Caren Rodriguez Blanco','(111) 111-1111',_binary '\0','2019-06-03 02:13:11',2,2),(2,'2019-06-02 03:24:29','carenro@email.com','Caren Daniela','(111) 111-1111',_binary '','2019-06-03 02:00:42',1,1),(3,'2019-06-02 03:24:42','pedro@email.com','Pedro','(111) 111-1111',_binary '','2019-06-03 01:58:45',2,2),(4,'2019-06-02 03:25:03','antonio@email.com','Antonio','(507) 777-888',_binary '','2019-06-03 00:04:44',2,3),(5,'2019-06-02 03:25:19','javier@email.com','Javier','(507) 777-888',_binary '\0','2019-06-03 00:04:47',1,3),(6,'2019-06-02 03:25:29','javier@email.com','Javier','(507) 8888-1425',NULL,'2019-06-02 03:25:29',1,3),(7,'2019-06-02 03:25:56','shamir@email.com','Shamir','(507) 7412-5896',NULL,'2019-06-02 03:25:56',3,1),(8,'2019-06-02 03:26:14','gabriel@email.com','Gabriel Roo','(507) 1234-5667',_binary '\0','2019-06-03 01:58:59',3,1),(9,'2019-06-02 03:52:03','gabriel@email.com','Marisol','(507) 1234-5667',_binary '','2019-06-03 00:05:28',3,1),(10,'2019-06-02 03:54:46','greinder@email.com','Greinder','(507) 1234-5667',NULL,'2019-06-02 03:54:46',3,1),(11,'2019-06-02 04:00:57','glevi@email.com','Glevi','(507) 8745-6321',_binary '','2019-06-02 04:00:57',3,2),(12,'2019-06-03 02:14:54','caren@email.com','Mitchell Contreras','68109345',_binary '','2019-06-03 02:14:54',2,2);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-02 22:32:16
