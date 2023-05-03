-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for playsport
CREATE DATABASE IF NOT EXISTS `playsport` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `playsport`;

-- Dumping structure for table playsport.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(380) NOT NULL,
  `price` bigint(20) NOT NULL DEFAULT 0,
  `category` bigint(20) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table playsport.products: ~14 rows (approximately)
DELETE FROM `products`;
INSERT INTO `products` (`id`, `name`, `description`, `price`, `category`) VALUES
	(32, 'Steps Aeróbicos 2 Niveles', 'Steps Sportfitness ideal para entrenamiento funcional y cardiovascular. Los beneficios de los Steps Aeróbicos incluyen quema de calorías y tonificación muscular, especialmente glúteos y piernas.\r\n\r\nSteps con 2 niveles de altura (13 cm y 17 cm).\r\nBases antideslizantes.\r\nPeso máximo de usuario: 100 kg.\r\nTrabajo cardiovascular.\r\nMedidas: Largo; 70 cm. Ancho; 27 cm.\r\nUso: doméstico', 145500, 1),
	(33, 'Mancuerna Encauchetada', 'Aumenta tu fuerza y tonifica tus músculos con las mancuernas encauchetadas SportFitness. Estas mancuernas están recubiertas de un material de alta calidad que no solo protege tus manos y el suelo de daños, sino que también proporciona un agarre antideslizante para mayor seguridad durante tus entrenamientos. Disponibles en varios pesos, las mancuernas encauchetadas son ideales p', 65200, 1),
	(34, 'Set de Bandas Elásticas en Tela', 'Mejora tu entrenamiento y hazlo más cómodo con las Bandas en Tela por 3 Sportfitness! Nuestras bandas están diseñadas con una suave y duradera tela que es cómoda en la piel. Con tres niveles de resistencia diferentes, estas bandas son perfectas para cualquier persona que busque mejorar su fuerza y flexibilidad en casa o en el gimnasio. Además, su diseño compacto y portátil perm', 83500, 1),
	(35, 'Colchoneta Profesional', 'Las Colchonetas Sportfitness son un implemento esencial para un entrenamiento de piso. La Colchoneta Profesional esta diseñada para proporcionar una absorción de impactos reduciendo la probabilidad de lesiones deportivas.', 112500, 2),
	(36, 'Bicicleta Spinning Urbino', 'Bicicletas spinning de banda Sportfitness ideal para tu entrenamiento cardiovascular. Algunos de los beneficios de las bicicletas estáticas son la tonificación del cuerpo, quema de calorías y prevención de enfermedades. Es perfecto para los que buscan ejercicio con bajo riesgo de lesión. La Bicicleta Spinning Urbino Sportfitness tiene la ventaja de tener un diseño compacto y pr', 1093500, 2),
	(37, 'Caminador Mecánico Plegable', 'El caminador mecánico Sportfitness es ideal para tu entrenamiento cardiovascular. Los beneficios de las caminadoras incluyen el fortalecimiento de piernas, incrementar tu energía, y prevención de enfermedades. El caminador mecánico Sportfitness es plegable y no requiere energía ideal para tu hogar. ', 1319200, 2),
	(38, 'Camiseta fitness cardio', 'Una camiseta básica como nos gusta, de corte simple y ceñido. Sigue tus movimientos, está pensada para cualquier tipo de actividad de fitness.\r\n', 39000, 4),
	(39, 'Leggings slim fitness', 'Los leggings básicos por excelencia.Nuestros estilistas los han diseñado para ti y siempre tendrán un lugar en tu rutina deportiva... o en tu día a día.\r\n', 39000, 4),
	(40, 'Short 2 en 1 fitness', 'Un short fitness 21 -con un look deportivo y femenino, recomendado para prácticas deportivas cómodas.\r\n', 131000, 4),
	(41, 'Chaqueta hombre cremallera con capucha', 'Nuestros estilistas han diseñado este saco de felpa con capucha para mantenerte abrigada de camino al entrenamiento o sencillamente en tu vida diaria.\r\n', 145000, 3),
	(42, 'Camiseta fitness regular', 'Esta camiseta de manga corta 100 % algodón es una prenda esencial en cualquier armario masculino gracias a su corte recto, su cuello redondo y su tela de 150 g/m².\r\n', 21000, 3),
	(43, 'Pantaloneta fitness', 'Nuestros equipos han trabajado mucho para proponerte una pantaloneta de fitness cómoda, con una relación calidad/precio imbatible y con una tela ecosostenible.\r\n', 79000, 3),
	(44, 'Tenis velcro niños', 'Los tenis AT EASY se han diseñado para acompañar a los niños durante sus actividades deportivas cotidianas.\r\n', 100000, 5),
	(45, 'Zapatillas ballet', 'Nuestro equipo de apasionados ha diseñado las medias puntas suela partida de tela para bailarines intermedios y en perfeccionamiento que buscan extensibilidad.\r\n', 134000, 5);

-- Dumping structure for table playsport.product_images
CREATE TABLE IF NOT EXISTS `product_images` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image_route` varchar(255) DEFAULT NULL,
  `id_product` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_product_images_products` (`id_product`),
  CONSTRAINT `FK_product_images_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table playsport.product_images: ~35 rows (approximately)
DELETE FROM `product_images`;
INSERT INTO `product_images` (`id`, `image_route`, `id_product`) VALUES
	(1, '1682725516915img.jpg', 32),
	(2, '1682725516916img.jpg', 32),
	(4, '1682725660852img.png', 33),
	(5, '1682725660854img.png', 33),
	(6, '1682725785844img.png', 34),
	(7, '1682725785854img.png', 34),
	(8, '1682725785850img.png', 34),
	(9, '1682725979863img.png', 35),
	(10, '1682725979864img.png', 35),
	(11, '1682726106482img.png', 36),
	(12, '1682726106486img.png', 36),
	(13, '1682726106488img.png', 36),
	(14, '1682726192569img.png', 37),
	(15, '1682726192572img.png', 37),
	(16, '1682726389341img.png', 38),
	(17, '1682726389343img.png', 38),
	(18, '1682726389344img.png', 38),
	(19, '1682726492648img.png', 39),
	(20, '1682726492650img.png', 39),
	(21, '1682726492651img.png', 39),
	(22, '1682726582227img.png', 40),
	(23, '1682726582229img.png', 40),
	(24, '1682726582230img.png', 40),
	(25, '1682726656232img.png', 41),
	(26, '1682726656234img.png', 41),
	(27, '1682726723025img.png', 42),
	(28, '1682726723028img.png', 42),
	(29, '1682726723032img.png', 42),
	(30, '1682726831709img.png', 43),
	(31, '1682726831712img.png', 43),
	(32, '1682726831712img.png', 43),
	(33, '1682726951055img.png', 44),
	(34, '1682726951057img.png', 44),
	(35, '1682727016664img.png', 45),
	(36, '1682727016665img.png', 45);

-- Dumping structure for table playsport.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table playsport.users: ~2 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `image`) VALUES
	(7, 'Natalia', 'Mora', 'natalia1@gmail.com', '$2a$10$YK/1ZA7LD2YK6GlqH5UsKua/5G5RDbwEWsyxO0G6hYT404X/XaYNS', 'Administrador', 'user1.png'),
	(8, 'Jaasbleydi', 'Gonzalez', 'natalia2@gmail.com', '$2a$10$5HUegvyPj2JKUJLwbV/Qu.wiI.kv23CXzNwgzffFYwLGIDh9kliEq', 'Usuario', 'Screenshot 2023-04-28 185934.png');

-- Dumping structure for table playsport.user_carts
CREATE TABLE IF NOT EXISTS `user_carts` (
  `cart_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT 1,
  `product_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`cart_id`) USING BTREE,
  KEY `FK_user_cart_users` (`user_id`) USING BTREE,
  KEY `FK_user_cart_products` (`product_id`),
  CONSTRAINT `FK_user_cart_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_user_cart_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table playsport.user_carts: ~3 rows (approximately)
DELETE FROM `user_carts`;
INSERT INTO `user_carts` (`cart_id`, `quantity`, `product_id`, `user_id`) VALUES
	(9, 1, 37, 7),
	(11, 1, 32, 7),
	(12, 1, 34, 7);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
