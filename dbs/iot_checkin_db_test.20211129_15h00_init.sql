-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 172.28.2.227    Database: iot_checkin_db_test
-- ------------------------------------------------------
-- Server version	8.0.13

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
-- Table structure for table `checkin_info`
--

DROP TABLE IF EXISTS `checkin_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkin_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_info_id` int(11) DEFAULT NULL,
  `vacxin_sl_mui` int(11) DEFAULT NULL,
  `checkin_time` varchar(45) DEFAULT NULL,
  `nhiet_do` float DEFAULT NULL,
  `khau_trang` int(11) DEFAULT NULL,
  `iot_bot_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ck_userinfo` (`user_info_id`),
  KEY `FK_ck_iot_bot` (`iot_bot_id`),
  CONSTRAINT `FK_ck_iot_bot` FOREIGN KEY (`iot_bot_id`) REFERENCES `iot_bot` (`id`),
  CONSTRAINT `FK_ck_userinfo` FOREIGN KEY (`user_info_id`) REFERENCES `user_info` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkin_info`
--

LOCK TABLES `checkin_info` WRITE;
/*!40000 ALTER TABLE `checkin_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkin_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback_info`
--

DROP TABLE IF EXISTS `feedback_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fb_info_json` varchar(45) DEFAULT NULL,
  `created_time` varchar(45) DEFAULT NULL,
  `daduyetflag` varchar(45) DEFAULT NULL,
  `last_updated_time` varchar(45) DEFAULT NULL,
  `cb_duyet_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_info`
--

LOCK TABLES `feedback_info` WRITE;
/*!40000 ALTER TABLE `feedback_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iot_bot`
--

DROP TABLE IF EXISTS `iot_bot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `iot_bot` (
  `id` int(11) NOT NULL,
  `ma` varchar(45) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `vitri` varchar(255) DEFAULT NULL,
  `ghichu` varchar(255) DEFAULT NULL,
  `cauhinh` json DEFAULT NULL,
  `use_cauhinh_chung_flag` tinyint(4) DEFAULT NULL,
  `tinhtrang` varchar(255) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `iot_bot_ma_UNIQUE` (`ma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iot_bot`
--

LOCK TABLES `iot_bot` WRITE;
/*!40000 ALTER TABLE `iot_bot` DISABLE KEYS */;
/*!40000 ALTER TABLE `iot_bot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iot_config_common`
--

DROP TABLE IF EXISTS `iot_config_common`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `iot_config_common` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `config_group` varchar(255) DEFAULT NULL,
  `config_code` varchar(255) DEFAULT NULL,
  `config_value` varchar(255) DEFAULT NULL,
  `ghi_chu` varchar(255) DEFAULT NULL,
  `last_updated_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `config_code_UNIQUE` (`config_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iot_config_common`
--

LOCK TABLES `iot_config_common` WRITE;
/*!40000 ALTER TABLE `iot_config_common` DISABLE KEYS */;
/*!40000 ALTER TABLE `iot_config_common` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sync_logs`
--

DROP TABLE IF EXISTS `sync_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sync_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sync_logs`
--

LOCK TABLES `sync_logs` WRITE;
/*!40000 ALTER TABLE `sync_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `sync_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `truong_dh`
--

DROP TABLE IF EXISTS `truong_dh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `truong_dh` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ma` varchar(45) DEFAULT NULL,
  `ten` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `truong_dh_ma_UNIQUE` (`ma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `truong_dh`
--

LOCK TABLES `truong_dh` WRITE;
/*!40000 ALTER TABLE `truong_dh` DISABLE KEYS */;
/*!40000 ALTER TABLE `truong_dh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `truong_dh_id` int(11) DEFAULT NULL,
  `cb_sv_ma` varchar(45) DEFAULT NULL,
  `ho_lot` varchar(45) DEFAULT NULL,
  `ten` varchar(45) DEFAULT NULL,
  `cb_sv_flag` varchar(45) DEFAULT NULL,
  `vacxin_sl_mui` int(11) DEFAULT NULL,
  `vacxin_info` varchar(45) DEFAULT NULL,
  `cmnd_so` varchar(45) DEFAULT NULL,
  `sdt` varchar(45) DEFAULT NULL,
  `diachi_lienlac` varchar(45) DEFAULT NULL,
  `last_updated_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_01` (`truong_dh_id`,`cb_sv_ma`) /*!80000 INVISIBLE */,
  UNIQUE KEY `idx_02` (`cmnd_so`),
  CONSTRAINT `FK_uinfo_truongdh` FOREIGN KEY (`truong_dh_id`) REFERENCES `truong_dh` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'iot_checkin_db_test'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-29 15:00:34
