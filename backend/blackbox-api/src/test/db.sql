-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: blackboxdb
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bp_erro`
--

DROP TABLE IF EXISTS `bp_erro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bp_erro` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(5) NOT NULL,
  `desc_ori` varchar(200) NOT NULL,
  `desc_pt` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bp_erro`
--

LOCK TABLES `bp_erro` WRITE;
/*!40000 ALTER TABLE `bp_erro` DISABLE KEYS */;
INSERT INTO `bp_erro` VALUES (1,'0','Internal error','Dado enviado excede o tamanho do campo'),(2,'100','RequestId is required','Campo enviado está vazio ou invalido'),(3,'101','MerchantId is required','Campo enviado está vazio ou invalido'),(4,'102','Payment Type is required','Campo enviado está vazio ou invalido'),(5,'103','Payment Type can only contain letters','Caracteres especiais não permitidos'),(6,'104','Customer Identity is required','Campo enviado está vazio ou invalido'),(7,'105','Customer Name is required','Campo enviado está vazio ou invalido'),(8,'106','Transaction ID is required','Campo enviado está vazio ou invalido'),(9,'107','OrderId is invalid or does not exists','Campo enviado excede o tamanho ou contem caracteres especiais'),(10,'108','Amount must be greater or equal to zero','Valor da transação deve ser maior que “0”'),(11,'109','Payment Currency is required','Campo enviado está vazio ou invalido'),(12,'110','Invalid Payment Currency','Campo enviado está vazio ou invalido'),(13,'111','Payment Country is required','Campo enviado está vazio ou invalido'),(14,'112','Invalid Payment Country','Campo enviado está vazio ou invalido'),(15,'113','Invalid Payment Code','Campo enviado está vazio ou invalido'),(16,'114','The provided MerchantId is not in correct format','O MerchantId enviado não é um GUID'),(17,'115','The provided MerchantId was not found','O MerchantID não existe ou pertence a outro ambiente (EX: Sandbox)'),(18,'116','The provided MerchantId is blocked','Loja bloqueada, entre em contato com o suporte Braspag'),(19,'117','Credit Card Holder is required','Campo enviado está vazio ou invalido'),(20,'118','Credit Card Number is required','Campo enviado está vazio ou invalido'),(21,'119','At least one Payment is required','Nó “Payment” não enviado'),(22,'120','Request IP not allowed. Check your IP White List','IP bloqueado por questões de segurança'),(23,'121','Customer is required','Nó “Customer” não enviado'),(24,'122','MerchantOrderId is required','Campo enviado está vazio ou invalido'),(25,'123','Installments must be greater or equal to one','Numero de parcelas deve ser superior a 1'),(26,'124','Credit Card is Required','Campo enviado está vazio ou invalido'),(27,'125','Credit Card Expiration Date is required','Campo enviado está vazio ou invalido'),(28,'126','Credit Card Expiration Date is invalid','Campo enviado está vazio ou invalido'),(29,'127','You must provide CreditCard Number','Numero do cartão de crédito é obrigatório'),(30,'128','Card Number length exceeded','Numero do cartão superiro a 16 digitos'),(31,'129','Affiliation not found','Meio de pagamento não vinculado a loja ou Provider invalido'),(32,'130','Could not get Credit Card','—'),(33,'131','MerchantKey is required','Campo enviado está vazio ou invalido'),(34,'132','MerchantKey is invalid','O Merchantkey enviado não é um válido'),(35,'133','Provider is not supported for this Payment Type','Provider enviado não existe'),(36,'134','FingerPrint length exceeded','Dado enviado excede o tamanho do campo'),(37,'135','MerchantDefinedFieldValue length exceeded','Dado enviado excede o tamanho do campo'),(38,'136','ItemDataName length exceeded','Dado enviado excede o tamanho do campo'),(39,'137','ItemDataSKU length exceeded','Dado enviado excede o tamanho do campo'),(40,'138','PassengerDataName length exceeded','Dado enviado excede o tamanho do campo'),(41,'139','PassengerDataStatus length exceeded','Dado enviado excede o tamanho do campo'),(42,'140','PassengerDataEmail length exceeded','Dado enviado excede o tamanho do campo'),(43,'141','PassengerDataPhone length exceeded','Dado enviado excede o tamanho do campo'),(44,'142','TravelDataRoute length exceeded','Dado enviado excede o tamanho do campo'),(45,'143','TravelDataJourneyType length exceeded','Dado enviado excede o tamanho do campo'),(46,'144','TravelLegDataDestination length exceeded','Dado enviado excede o tamanho do campo'),(47,'145','TravelLegDataOrigin length exceeded','Dado enviado excede o tamanho do campo'),(48,'146','SecurityCode length exceeded','Dado enviado excede o tamanho do campo'),(49,'147','Address Street length exceeded','Dado enviado excede o tamanho do campo'),(50,'148','Address Number length exceeded','Dado enviado excede o tamanho do campo'),(51,'149','Address Complement length exceeded','Dado enviado excede o tamanho do campo'),(52,'150','Address ZipCode length exceeded','Dado enviado excede o tamanho do campo'),(53,'151','Address City length exceeded','Dado enviado excede o tamanho do campo'),(54,'152','Address State length exceeded','Dado enviado excede o tamanho do campo'),(55,'153','Address Country length exceeded','Dado enviado excede o tamanho do campo'),(56,'154','Address District length exceeded','Dado enviado excede o tamanho do campo'),(57,'155','Customer Name length exceeded','Dado enviado excede o tamanho do campo'),(58,'156','Customer Identity length exceeded','Dado enviado excede o tamanho do campo'),(59,'157','Customer IdentityType length exceeded','Dado enviado excede o tamanho do campo'),(60,'158','Customer Email length exceeded','Dado enviado excede o tamanho do campo'),(61,'159','ExtraData Name length exceeded','Dado enviado excede o tamanho do campo'),(62,'160','ExtraData Value length exceeded','Dado enviado excede o tamanho do campo'),(63,'161','Boleto Instructions length exceeded','Dado enviado excede o tamanho do campo'),(64,'162','Boleto Demostrative length exceeded','Dado enviado excede o tamanho do campo'),(65,'163','Return Url is required','URL de retorno não é valida - Não é aceito paginação ou extenções (EX .PHP) na URL de retorno'),(66,'166','AuthorizeNow is required','—'),(67,'167','Antifraud not configured','Antifraude não vinculado ao cadastro do lojista'),(68,'168','Recurrent Payment not found','Recorrencia não encontrada'),(69,'169','Recurrent Payment is not active','Recorrencia não está ativa. Execução paralizada'),(70,'170','Cartão Protegido not configured','Cartão protegido não vinculado ao cadastro do lojista'),(71,'171','Affiliation data not sent','Falha no processamento do pedido - Entre em contato com o suporte Braspag'),(72,'172','Credential Code is required','Falha na validação das credenciadas enviadas'),(73,'173','Payment method is not enabled','Meio de pagamento não vinculado ao cadastro do lojista'),(74,'174','Card Number is required','Campo enviado está vazio ou invalido'),(75,'175','EAN is required','Campo enviado está vazio ou invalido'),(76,'176','Payment Currency is not supported','Campo enviado está vazio ou invalido'),(77,'177','Card Number is invalid','Campo enviado está vazio ou invalido'),(78,'178','EAN is invalid','Campo enviado está vazio ou invalido'),(79,'179','The max number of installments allowed for recurring payment is 1','Campo enviado está vazio ou invalido'),(80,'180','The provided Card PaymentToken was not found','Token do Cartão protegido não encontrado'),(81,'181','The MerchantIdJustClick is not configured','Token do Cartão protegido bloqueado'),(82,'182','Brand is required','Bandeira do cartão não enviado'),(83,'183','Invalid customer bithdate','Data de nascimento invalida ou futura'),(84,'184','Request could not be empty','Falha no formado ta requisição. Verifique o código enviado'),(85,'185','Brand is not supported by selected provider','Bandeira não suportada pela API Braspag'),(86,'186','The selected provider does not support the options provided (Capture, Authenticate, Recurrent or Installments)','Meio de pagamento não suporta o comando enviado'),(87,'187','ExtraData Collection contains one or more duplicated names','—'),(88,'188','Avs with CPF invalid','—'),(89,'189','Avs with length of street exceeded','Dado enviado excede o tamanho do campo'),(90,'190','Avs with length of number exceeded','Dado enviado excede o tamanho do campo'),(91,'190','Avs with length of complement exceeded','Dado enviado excede o tamanho do campo'),(92,'191','Avs with length of district exceeded','Dado enviado excede o tamanho do campo'),(93,'192','Avs with zip code invalid','CEP enviado é invalido'),(94,'193','Split Amount must be greater than zero','Valor para realização do SPLIT deve ser superior a 0'),(95,'194','Split Establishment is Required','SPLIT não habilitado para o cadastro da loja'),(96,'195','The PlataformId is required','Validados de plataformas não enviado'),(97,'196','DeliveryAddress is required','Campo obrigatório não enviado'),(98,'197','Street is required','Campo obrigatório não enviado'),(99,'198','Number is required','Campo obrigatório não enviado'),(100,'199','ZipCode is required','Campo obrigatório não enviado'),(101,'200','City is required','Campo obrigatório não enviado'),(102,'201','State is required','Campo obrigatório não enviado'),(103,'202','District is required','Campo obrigatório não enviado'),(104,'203','Cart item Name is required','Campo obrigatório não enviado'),(105,'204','Cart item Quantity is required','Campo obrigatório não enviado'),(106,'205','Cart item type is required','Campo obrigatório não enviado'),(107,'206','Cart item name length exceeded','Dado enviado excede o tamanho do campo'),(108,'207','Cart item description length exceeded','Dado enviado excede o tamanho do campo'),(109,'208','Cart item sku length exceeded','Dado enviado excede o tamanho do campo'),(110,'209','Shipping addressee sku length exceeded','Dado enviado excede o tamanho do campo'),(111,'210','Shipping data cannot be null','Campo obrigatório não enviado'),(112,'211','WalletKey is invalid','Dados da Visa Checkout invalidos'),(113,'212','Merchant Wallet Configuration not found','Visa Checkout não vinculado a conta do lojista'),(114,'213','Credit Card Number is invalid','Cartão de crédito enviado é invalido'),(115,'214','Credit Card Holder Must Have Only Letters','Portador do cartão não deve conter caracteres especiais'),(116,'215','Agency is required in Boleto Credential','Campo obrigatório não enviado'),(117,'216','Customer IP address is invalid','IP bloqueado por questões de segurança'),(118,'300','MerchantId was not found','—'),(119,'301','Request IP is not allowed','—'),(120,'302','Sent MerchantOrderId is duplicated','—'),(121,'303','Sent OrderId does not exist','—'),(122,'304','Customer Identity is required','—'),(123,'306','Merchant is blocked','—'),(124,'307','Transaction not found','Transação não encontrada ou não existente no ambiente'),(125,'308','Transaction not available to capture','Transação não pode ser capturada - Entre em contato com o suporte Braspag'),(126,'309','Transaction not available to void','Transação não pode ser Cancelada - Entre em contato com o suporte Braspag'),(127,'310','Payment method doest not support this operation','Comando enviado não suportado pelo meio de pagamento'),(128,'311','Refund is not enabled for this merchant','Cancelamento após 24 horas não liberado para o lojista'),(129,'312','Transaction not available to refund','Transação não permite cancelamento após 24 horas'),(130,'313','Recurrent Payment not found','Transação recorrente não encontrada ou não disponivel no ambiente'),(131,'314','Invalid Integration','—'),(132,'315','Cannot change NextRecurrency with pending payment','—'),(133,'316','Cannot set NextRecurrency to past date','Não é permitido alterada dada da recorrencia para uma data passada'),(134,'317','Invalid Recurrency Day','—'),(135,'318','No transaction found','—'),(136,'319','Smart recurrency is not enabled','Recorrencia não vinculada ao cadastro do lojista'),(137,'320','Can not Update Affiliation Because this Recurrency not Affiliation saved','—'),(138,'321','Can not set EndDate to before next recurrency','—'),(139,'322','Zero Dollar Auth is not enabled','Zero Dollar não vinculado ao cadastro do lojista'),(140,'323','Bin Query is not enabled','Consulta de Bins não vinculada ao cadastro do lojista');
/*!40000 ALTER TABLE `bp_erro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `divida`
--

DROP TABLE IF EXISTS `divida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `divida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `nome_cartao` varchar(50) DEFAULT NULL,
  `telefone` varchar(25) DEFAULT NULL,
  `valor` int(8) DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `dt_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `dt_pagto` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1608 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `divida`
--

LOCK TABLES `divida` WRITE;
/*!40000 ALTER TABLE `divida` DISABLE KEYS */;
/*!40000 ALTER TABLE `divida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimento`
--

DROP TABLE IF EXISTS `movimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movimento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_divida` int(11) DEFAULT NULL,
  `id_pagto` varchar(50) DEFAULT NULL,
  `cod_retorno` varchar(12) DEFAULT NULL,
  `desc_retorno` varchar(200) DEFAULT NULL,
  `retorno_full` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `fk_movto_divida` (`id_divida`),
  CONSTRAINT `fk_movto_divida` FOREIGN KEY (`id_divida`) REFERENCES `divida` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimento`
--

LOCK TABLES `movimento` WRITE;
/*!40000 ALTER TABLE `movimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-13 18:55:46
