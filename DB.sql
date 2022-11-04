--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'Curieux',NULL,1),(2,'Pédagogue',NULL,1),(3,'Rigoureux',NULL,1),(4,'Sens du relationnel',NULL,1),(5,'Esprit d\'équipe',NULL,1),(6,'Capacité d\'adaptation',NULL,1),(7,'Communicatif',NULL,1),(8,'Creatif',NULL,1);
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills_has_projects`
--

DROP TABLE IF EXISTS `skills_has_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills_has_projects` (
  `skills_id` int NOT NULL,
  `projects_id` int NOT NULL,
  PRIMARY KEY (`skills_id`,`projects_id`),
  KEY `fk_skills_has_projects_projects1_idx` (`projects_id`),
  KEY `fk_skills_has_projects_skills1_idx` (`skills_id`),
  CONSTRAINT `fk_skills_has_projects_projects1` FOREIGN KEY (`projects_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `fk_skills_has_projects_skills1` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills_has_projects`
--

LOCK TABLES `skills_has_projects` WRITE;
/*!40000 ALTER TABLE `skills_has_projects` DISABLE KEYS */;
INSERT INTO `skills_has_projects` VALUES (1,7),(2,7),(3,7),(4,7),(5,7),(1,8),(3,8),(4,8),(5,8),(6,8),(8,8),(1,9),(2,9),(3,9),(4,9),(5,9),(1,10),(3,10),(4,10),(5,10),(6,10),(8,10),(1,11),(2,11),(3,11),(4,11),(5,11),(6,11),(8,11),(1,12),(3,12),(4,12),(5,12),(6,12),(8,12);
/*!40000 ALTER TABLE `skills_has_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jonas.moreau@hotmail.com','$argon2id$v=19$m=65536,t=3,p=4$0XIWMbQ08lkw5Go9XrjNGQ$WskiS+KWUu6gV4hR30GXw/D9Mq7RrUfBxrEzMgcX2A4');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-04 15:18:42