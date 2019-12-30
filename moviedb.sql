-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: filmstore
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `cast`
--

DROP TABLE IF EXISTS `cast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cast` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `profile_path` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cast`
--

LOCK TABLES `cast` WRITE;
/*!40000 ALTER TABLE `cast` DISABLE KEYS */;
INSERT INTO `cast` VALUES (1,'Kristen Bell','/9DoDVUkoXhT3O2R1RymPlOfUryl.jpg'),(2,'Idina Menzel','/s2AjAX3qr0cZpfEdiEyYko9SGrZ.jpg'),(3,'Jonathan Groff','/3kmnYKAzSc3Lp7iK5pcj97Hx9Cm.jpg'),(4,'Josh Gad','/oyEprEGF1aqWAqUZNx3yujJ9gPn.jpg'),(5,'Sterling K. Brown','/l0Zth6GbkZbMpyl52RPMCO7GQA5.jpg'),(6,'Evan Rachel Wood','/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg'),(7,'Ciarán Hinds','/h5n8B12WoY1UAZjzSVEup4vsoBw.jpg'),(8,'Jason Ritter','/ysWVNRFfk7oGngurF7VWkWhvyQS.jpg'),(9,'Rachel Matthews','/eRBNfkDmYwHVeqEGbPAYnaOUUc6.jpg'),(10,'Alfred Molina','/uJQVkqEVJGLMaJbwI2tTDlJ9Oo0.jpg'),(11,'Jeremy Sisto','/o2FDlQQWOxF18Bq6hDvhiQZE8i9.jpg'),(12,'Martha Plimpton','/7lU1kci6OZMwZk5Kxfnz0u8B5l5.jpg'),(13,'Alan Tudyk','/6QuMtbD8kmhpwWhFKfNzEvHRLOu.jpg'),(15,'Jessica DiCicco','/dtwJt5xxzkCHXUC7lqspFmmQndI.jpg'),(16,'Scott Menville','/siBtL81DEUWujwhvvnA4r3NJpcJ.jpg'),(17,'Fred Tatasciore','/lNe4zn9fJ302GehQVaFk5BNcGGM.jpg'),(19,'Phil LaMarr','/2rYa0M1bOSAATGbF5oe5pmoNeDn.jpg'),(20,'Christophe Beck','/2fnJUmCk6IEpVIptpYaUk31epHx.jpg'),(21,'Khoa học','/7lU1kci6OZMwZk5Kxfnz0u8B5l5.jpg');
/*!40000 ALTER TABLE `cast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `content` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_has_movie_movie2_idx` (`movie_id`),
  KEY `fk_user_has_movie_user2_idx` (`user_id`),
  CONSTRAINT `fk_user_has_movie_movie2` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`),
  CONSTRAINT `fk_user_has_movie_user2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,2,1,'Phim rất hay'),(2,1,1,'Phim cũng tạm tạm'),(4,1,2,'Hahaha'),(5,1,2,'Nnononon'),(7,2,3,'dsdas'),(8,2,3,'sdsadsd'),(9,2,2,'sdsads223'),(10,3,4,'sdsa2d1s32da'),(11,1,5,'Hello Dương'),(12,2,5,'Kiểm thử'),(13,2,5,'Phim rất tuyệt vời'),(14,2,5,'Duong');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`movie_id`),
  KEY `fk_user_has_movie_movie1_idx` (`movie_id`),
  KEY `fk_user_has_movie_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_movie_movie1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`),
  CONSTRAINT `fk_user_has_movie_user1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Action'),(2,'Phiêu lưu'),(3,'Animation'),(4,'Comedy'),(5,'Crime'),(6,'Documentary'),(7,'Drama'),(9,'Fantasy'),(10,'History'),(11,'Horror'),(12,'Music'),(13,'Mystery'),(14,'Tình cảm'),(15,'Science Fiction'),(16,'TV Movie'),(17,'Thriller'),(18,'War'),(19,'Cổ Trang'),(21,'Tâm lý');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre_movie`
--

DROP TABLE IF EXISTS `genre_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre_movie` (
  `genre_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  PRIMARY KEY (`genre_id`,`movie_id`),
  KEY `fk_genre_has_movie_movie1_idx` (`movie_id`),
  KEY `fk_genre_has_movie_genre1_idx` (`genre_id`),
  CONSTRAINT `fk_genre_has_movie_genre1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  CONSTRAINT `fk_genre_has_movie_movie1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre_movie`
--

LOCK TABLES `genre_movie` WRITE;
/*!40000 ALTER TABLE `genre_movie` DISABLE KEYS */;
INSERT INTO `genre_movie` VALUES (1,1),(2,1),(3,1),(1,2),(14,2),(1,3),(14,3),(2,4),(15,4),(2,5),(15,5),(2,6),(15,6),(2,7),(16,7),(3,8),(16,8),(3,9),(16,9),(3,10),(17,10),(4,11),(17,11),(4,12),(17,12),(4,13),(18,13),(5,14),(18,14),(5,15),(18,15),(5,16),(19,16),(6,17),(19,17),(6,18),(19,18),(1,19),(6,19),(1,20),(7,20),(2,21),(7,21),(2,22),(7,22),(3,23),(3,24),(4,25),(4,26),(9,26),(5,27),(9,27),(5,28),(9,28),(2,29),(3,29),(6,29),(9,29),(10,29),(6,30),(10,30),(7,31),(10,31),(7,32),(11,32),(11,33),(11,34),(9,35),(12,35),(9,36),(12,36),(10,37),(12,37),(10,38),(13,38),(11,39),(13,39),(11,40),(13,40);
/*!40000 ALTER TABLE `genre_movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linkmovie`
--

DROP TABLE IF EXISTS `linkmovie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linkmovie` (
  `movie_id` int(11) NOT NULL,
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '0 : Video quality normal\r\n\n1 : Video HD',
  `movie_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`movie_id`,`type`),
  KEY `fk_LinkMovie_movie1_idx` (`movie_id`),
  CONSTRAINT `fk_LinkMovie_movie1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linkmovie`
--

LOCK TABLES `linkmovie` WRITE;
/*!40000 ALTER TABLE `linkmovie` DISABLE KEYS */;
INSERT INTO `linkmovie` VALUES (1,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(1,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(2,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(2,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(3,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(3,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(4,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(4,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(5,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(5,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(6,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(6,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(7,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(7,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(8,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(8,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(9,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(9,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(10,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(10,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(11,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(11,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(12,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(12,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(13,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(13,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(14,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(14,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(15,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(15,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(16,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(16,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(17,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(17,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(18,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(18,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(19,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(19,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(20,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(20,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(21,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(21,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(22,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(22,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(23,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(23,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(24,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(24,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(25,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(25,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(26,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(26,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(27,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(27,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(28,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(28,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(29,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(29,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(30,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(30,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(31,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(31,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(32,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(32,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(33,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(33,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(34,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(34,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(35,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(35,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(36,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(36,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(37,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(37,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(38,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(38,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(39,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(39,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0),(40,0,'https://cdn.jwplayer.com/players/U6s0AJpA-nWXSInFW.html',0),(40,1,'https://cdn.jwplayer.com/players/BAktIdPo-nWXSInFW.html',0);
/*!40000 ALTER TABLE `linkmovie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL,
  `runtime` int(11) DEFAULT '0',
  `release_date` date DEFAULT '1990-10-10',
  `overview` varchar(1000) DEFAULT '',
  `vote_average` float DEFAULT '0',
  `production_countries` varchar(45) DEFAULT 'unknow',
  `popularity` float DEFAULT '0',
  `language` varchar(60) DEFAULT '',
  `poster_path` varchar(100) DEFAULT '',
  `backdrop_path` varchar(100) DEFAULT '',
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Kiểm tra',99,'2019-12-27','Thông cáo của công ty ICM: Không thể tiếp cận được Jack, có cá nhân đứng sau chia rẽ, sẽ bảo vệ Jack vì vẫn là ca sĩ độc quyền 5 năm của công ty!',5.5,'VietNam',320.5,'Vietsub','/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg','/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',22),(2,'Terminator: Dark Fate',0,'2015-07-15','More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani\'s survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.',6.4,'unknow',221.789,'','/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg','/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',110),(3,'Frozen II',0,'2016-07-21','Elsa, Anna, Kristoff and Olaf are going far in the forest to know the truth about an ancient mystery of their kingdom.',5.1,'unknow',277.172,'','/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg','/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',5),(4,'Red Shoes and the Seven Dwarfs',0,'2018-07-24','Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.',6,'unknow',124.503,'','/MBiKqTsouYqAACLYNDadsjhhC0.jpg','/bga3i5jcejBekr2FCGJga1fYCh.jpg',6),(5,'Charlie\'s Angels',0,'2014-09-24','When a systems engineer blows the whistle on a dangerous technology, Charlie\'s Angels from across the globe are called into action, putting their lives on the line to protect society.',6.9,'unknow',159.919,'','/36YiDLw3IWkQyhfJnCjG2GCNgg9.jpg','/P7QwQE8HJaB5bIIACyRdXVV7gO.jpg',4),(6,'Angel Has Fallen',0,'2019-06-25','After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by his own agency and the FBI, Banning races to clear his name and uncover the real terrorist threat which has set its sights on Air Force One.',5.8,'unknow',169.408,'','/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg','/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg',10),(7,'One Piece: Stampede',0,'2019-09-24','One Piece: Stampede is a stand-alone film that celebrates the anime\'s 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger\'s treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger\'s crew.',7.3,'unknow',136.105,'','/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg','/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg',52),(8,'Maleficent: Mistress of Evil',0,'1900-01-20','Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',7.2,'unknow',84.61,'','/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg','/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',1),(9,'Ip Man 4: The Finale',0,'1900-01-20','Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.',0,'unknow',109.701,'','/vn94LlNrbUWIZZyAdmvUepFBeaY.jpg','/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg',121),(10,'Gemini Man',0,'1900-01-20','Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.',5.6,'unknow',155.556,'','/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg','/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg',121),(11,'Fast & Furious Presents: Hobbs & Shaw',0,'1900-01-20','Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton\'s ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson\'s Luke Hobbs and Statham\'s Deckard Shaw.)',6.6,'unknow',110.374,'','/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg','/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg',0),(12,'The Lion King',0,'1900-01-20','Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.',7.1,'unknow',194.319,'','/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg','/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg',14),(13,'Ford v Ferrari',0,'1900-01-20','American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',8,'unknow',110.183,'','/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg','/n3UanIvmnBlH531pykuzNs4LbH6.jpg',545),(14,'Cars',0,'1900-06-20','Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town\'s offbeat characters.',6.7,'unknow',80.039,'','/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg','/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg',132),(15,'Aladdin',0,'1900-01-20','A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.',7.1,'unknow',92.356,'','/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg','/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg',158),(16,'23-F: la película',0,'1900-11-20','The failed coup d\'état of February 23, 1981, which began with the capture of the Congress of Deputies and ended with the release of parliamentarians, put at serious risk the Spanish democracy.',5.6,'unknow',48.004,'','/fgw1XkdmSaD226KtIKcdNmysb3X.jpg','/53mOHTuLtzlzGX7vw6ryQCU0gUC.jpg',798),(17,'Spider-Man: Far from Home',0,'1900-01-20','Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',7.6,'unknow',207.098,'','/lcq8dVxeeOqHvvgcte707K0KVx5.jpg','/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',1234),(18,'El Camino: A Breaking Bad Movie',0,'1900-01-20','In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.',7,'unknow',71.492,'','/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg','/ijiE9WoGSwSzM16zTxvUneJ8RXc.jpg',1654),(19,'Doctor Sleep',0,'1900-01-20','A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to \"shine.\" He tries to protect her from the True Knot, a cult whose goal is to feed off of people like them in order to remain immortal.',7.1,'unknow',71.968,'','/p69QzIBbN06aTYqRRiCOY1emNBh.jpg','/1nm0sk8UUx9jHCTHuMKe2jkt4Pn.jpg',1778),(20,'Dora and the Lost City of Gold',0,'1900-01-20','Dora, a girl who has spent most of her life exploring the jungle with her parents, now must navigate her most dangerous adventure yet: high school. Always the explorer, Dora quickly finds herself leading Boots (her best friend, a monkey), Diego, and a rag tag group of teens on an adventure to save her parents and solve the impossible mystery behind a lost Inca civilization.',6.4,'unknow',65.608,'','/xvYCZ740XvngXK0FNeSNVTJJJ5v.jpg','/61sbyO47yIpsMFyLhY1MWcqjg1Q.jpg',313),(21,'Avengers: Infinity War',0,'1900-01-20','As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',8.3,'unknow',84.267,'','/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg','/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',12348),(22,'Anna',0,'1900-01-20','Beneath Anna Poliatova\'s striking beauty lies a secret that will unleash her indelible strength and skill to become one of the world\'s most feared government assassins.',6.4,'unknow',58.093,'','/d8u4jpkDKgEPDJUl4g3vOOP3mDe.jpg','/pIL9e5cN6RNugDCCLwn3stfb9HE.jpg',13247),(23,'Ellipse',0,'1900-01-20','A man and his dog are stranded on a volatile, oval-shaped planet and are forced to adapt and escape before time destroys them both.',4,'unknow',118.121,'','/4I0CQfnMy6sRR7QhgqsXR16TmIs.jpg','/sxPycUAaLJJGq2lhhgzR96ePaO0.jpg',2387),(24,'John Wick: Chapter 3 - Parabellum',0,'1900-01-20','Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.',7.1,'unknow',65.512,'','/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg','/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg',12332),(25,'Ralph Breaks the Internet',0,'1900-01-20','Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope\'s video game, \"Sugar Rush.\" In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.',7.2,'unknow',47.173,'','/qEnH5meR381iMpmCumAIMswcQw2.jpg','/88poTBTafMXaz73vYi3c74g0y2k.jpg',121),(26,'47 Meters Down: Uncaged',0,'1900-01-20','A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean\'s deadliest shark species.',4.9,'unknow',57.517,'','/g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg','/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg',803),(27,'Klaus',0,'1900-01-20','When Jesper distinguishes himself as the Postal Academy\'s worst student, he is sent to Smeerensburg, a small village located on a icy island above the Arctic Circle, where grumpy inhabitants barely exchange words, let alone letters. Jesper is about to give up and abandon his duty as a postman when he meets local teacher Alva and Klaus, a mysterious carpenter who lives alone in a cabin full of handmade toys.',8.7,'unknow',85.749,'','/q125RHUDgR4gjwh1QkfYuJLYkL.jpg','/mlxKite1x1PgmIhJgAxNS9eHmH8.jpg',722),(28,'Shipwrecked',0,'1900-01-19','A young Norwegian boy in 1850s England goes to work as a cabin boy and discovers some of his shipmates are actually pirates.',6.5,'unknow',29.417,'','/jf2PkR0Yt0ZRMKqtJzwja7JV2Hk.jpg','/rp5dh6D0MLOIIVHkugv6Z8gBLwg.jpg',813),(29,'Good Boys',0,'1900-01-20','A group of young boys on the cusp of becoming teenagers embark on an epic quest to fix their broken drone before their parents get home.',6.5,'unknow',45.114,'','/tximyCXMEnWIIyOy9STkOduUprG.jpg','/6Xsz9KHQmCcIcj3CoWQq5eLtVoT.jpg',3137),(30,'Dark Phoenix',0,'1900-01-20','The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she\'s hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey\'s new abilities to rule the galaxy.',6.1,'unknow',50.49,'','/cCTJPelKGLhALq3r51A9uMonxKj.jpg','/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg',3221),(31,'Lady and the Tramp',0,'1900-01-20','The love story between a pampered Cocker Spaniel named Lady and a streetwise mongrel named Tramp. Lady finds herself out on the street after her owners have a baby and is saved from a pack by Tramp, who tries to show her to live her life footloose and collar-free.',7.2,'unknow',64.145,'','/kzJ4a0ITuMJDuX2IjFKYG6QIipW.jpg','/73curw674iTzTX81AGaj5dyZUX5.jpg',1321),(32,'Dolemite Is My Name',0,'1900-01-20','The story of Rudy Ray Moore, who created the iconic big screen pimp character Dolemite in the 1970s.',7.2,'unknow',38.374,'','/kURLLZ10A0ZhI5bVIyOuPBzbtSB.jpg','/8FuiFasbeFQj24Vqx6JqSCqj5lO.jpg',2337),(33,'Toy Story 4',0,'1900-01-20','Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',7.6,'unknow',53.819,'','/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg','/m67smI1IIMmYzCl9axvKNULVKLr.jpg',1231),(34,'Parasite',0,'1900-01-20','All unemployed, Ki-taek\'s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',8.5,'unknow',61.276,'','/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg','/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',12237),(35,'The King',0,'1900-01-20','England, 15th century. Hal, a capricious prince who lives among the populace far from court, is forced by circumstances to reluctantly accept the throne and become Henry V.',7.2,'unknow',52.01,'','/8u0QBGUbZcBW59VEAdmeFl9g98N.jpg','/r0AWsZ9dBvC2No3kND9nxv3iRbb.jpg',23212),(36,'Terminator Genisys',0,'1900-01-20','The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John\'s fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.',5.9,'unknow',59.255,'','/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg','/3DmxSJ08m9wwbxwbwHzA4dunGNO.jpg',788),(37,'It Chapter Two',0,'1900-01-20','27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.',6.9,'unknow',82.837,'','/zfE0R94v1E8cuKAerbskfD3VfUt.jpg','/8moTOzunF7p40oR5XhlDvJckOSW.jpg',3247),(38,'John Wick',0,'1900-01-20','Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.',7.2,'unknow',56.231,'','/5vHssUeVe25bMrof1HyaPyWgaP.jpg','/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg',7894),(39,'The Angry Birds Movie 2',0,'1900-01-20','Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine.',6.4,'unknow',50.002,'','/ebe8hJRCwdflNQbUjRrfmqtUiNi.jpg','/k7sE3loFwuU2mqf7FbZBeE3rjBa.jpg',7941),(40,'Once Upon a Time... in Hollywood',0,'1900-01-20','A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood\'s Golden Age in 1969 Los Angeles.',7.6,'unknow',48.573,'','/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg','/nGJpQCAn2NKeDoEflLI5DIvsqoQ.jpg',1234);
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_cast`
--

DROP TABLE IF EXISTS `movie_cast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_cast` (
  `movie_id` int(11) NOT NULL,
  `cast_id` int(11) NOT NULL,
  `character` varchar(100) DEFAULT 'UnKnow',
  PRIMARY KEY (`movie_id`,`cast_id`),
  KEY `fk_movie_has_cast_cast1_idx` (`cast_id`),
  KEY `fk_movie_has_cast_movie1_idx` (`movie_id`),
  CONSTRAINT `fk_movie_has_cast_cast1` FOREIGN KEY (`cast_id`) REFERENCES `cast` (`id`),
  CONSTRAINT `fk_movie_has_cast_movie1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_cast`
--

LOCK TABLES `movie_cast` WRITE;
/*!40000 ALTER TABLE `movie_cast` DISABLE KEYS */;
INSERT INTO `movie_cast` VALUES (1,1,'Caster 1'),(1,2,'Caster 2'),(1,3,'Caster 3'),(1,4,'Caster 4'),(2,5,'Caster 5'),(2,6,'Caster 6'),(3,7,'Caster 7'),(3,8,'Caster 8'),(3,9,'Caster 9'),(3,10,'Caster 10'),(3,11,'Caster 11'),(4,12,'Caster 12'),(4,13,'Caster 13'),(5,15,'Caster 15'),(6,16,'Caster 16'),(6,17,'Caster 17'),(8,19,'Caster 19'),(9,1,'Caster 21'),(9,2,'Caster 22'),(9,3,'Caster 23'),(9,4,'Caster 24'),(9,5,'Caster 25'),(9,6,'Caster 26'),(9,20,'Caster 20'),(10,7,'Caster 27'),(10,8,'Caster 28'),(10,9,'Caster 29'),(10,10,'Caster 30'),(11,11,'Caster 31'),(11,12,'Caster 32'),(11,13,'Caster 33'),(12,15,'Caster 35'),(12,16,'Caster 36'),(12,17,'Caster 37'),(13,1,'Caster 41'),(13,2,'Caster 42'),(13,19,'Caster 39'),(13,20,'Caster 40'),(14,3,'Caster 43'),(14,4,'Caster 44'),(14,5,'Caster 45'),(14,6,'Caster 46'),(15,7,'Caster 47'),(15,8,'Caster 48'),(15,9,'Caster 49'),(16,10,'Caster 50'),(16,11,'Caster 51'),(16,12,'Caster 52'),(16,13,'Caster 53'),(18,15,'Caster 55'),(19,16,'Caster 56'),(20,17,'Caster 57'),(21,19,'Caster 59'),(21,20,'Caster 60'),(40,1,'Caster 1');
/*!40000 ALTER TABLE `movie_cast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `role` varchar(10) DEFAULT 'ROLE_USER',
  `imageUrl` varchar(200) DEFAULT NULL,
  `emailVerified` tinyint(1) DEFAULT '0',
  `provider` varchar(45) DEFAULT NULL,
  `providerId` varchar(45) DEFAULT NULL,
  `type` varchar(10) DEFAULT 'NORMAL' COMMENT 'Value : NORMAL , VIP',
  `email_verified` bit(1) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ntduong1998vn@gmail.com',NULL,'Dương Nguyễn Triều','ROLE_USER',NULL,0,'google',NULL,NULL,_binary '\0','https://lh6.googleusercontent.com/-CDVxvPvmnIs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re-xaZRccNeekUjIQ_f5qggAiOgoQ/photo.jpg','104197373977344845176'),(2,'test1@gmail.com','$2a$10$j3qBu3FhlUW9dbRco5TuMO/MF3auHeSKI50PEzCKhOYaxa9HKnY4q','Nguyễn Triều Dương','ROLE_USER',NULL,0,'local',NULL,NULL,_binary '\0','https://lh6.googleusercontent.com/-CDVxvPvmnIs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re-xaZRccNeekUjIQ_f5qggAiOgoQ/photo.jpg',NULL),(3,'test2@gmail.com','$2a$10$5y.neOYG56ohaBvNPSPxB.tSSqLN9T0JuSFXqOWsCFvR85LOGB8ie','Thanh Thanh','ROLE_ADMIN',NULL,0,'local',NULL,NULL,_binary '\0','https://lh6.googleusercontent.com/-CDVxvPvmnIs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re-xaZRccNeekUjIQ_f5qggAiOgoQ/photo.jpg',NULL),(4,'16110302@student.hcmute.edu.vn',NULL,'Nguyen Trieu Duong','ROLE_USER',NULL,0,'google',NULL,NULL,_binary '\0','https://lh6.googleusercontent.com/-HnYMywVnZNY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd9qf_J4HXhWc6WGDan-GILL0E9bQ/photo.jpg','107101364826559878518'),(5,'gcltt10@gmail.com',NULL,'triều dương nguyễn','ROLE_USER',NULL,0,'google',NULL,NULL,_binary '\0','https://lh3.googleusercontent.com/a-/AAuE7mBXMWmDEmlsIl4UOfzfZe0iE3qwXmMRoAqNNoOd6w','118041206115208168390');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-28 13:27:15
