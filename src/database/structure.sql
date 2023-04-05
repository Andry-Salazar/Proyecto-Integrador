CREATE DATABASE PlaySport;
USE PlaySport;

create table users(
user_id int NOT NULL AUTO_INCREMENT,
first_name varchar(50) NOT NULL,
last_name varchar(50) NOT NULL,
user_email varchar(60) NOT NULL,
user_password varchar(60) NOT NULL,
user_image varchar(40) NOT NULL,
primary key(user_id)
);

create table orders(
order_id int NOT NULL,
order_date timestamp NOT NULL,
order_status boolean NOT NULL,
primary key (order_id)
);

create table categorys(
category_id int NOT NULL,
category_name varchar(40) NOT NULL,
primary key (category_id)
);

create table products(
product_id int NOT NULL AUTO_INCREMENT,
product_name varchar(60) NOT NULL,
product_description varchar(380) NOT NULL,
product_price int NOT NULL,
product_image varchar(60) NOT NULL,
category_id int NOT NULL,
primary key (product_id),
foreign key (category_id) references categorys(category_id)
);

create table orders_products(
order_products_id int NOT NULL,
order_id int NOT NULL,
product_id int NOT NULL,
primary key (order_products_id),
foreign key (order_id) references orders(order_id),
foreign key (product_id) references products(product_id)
);


INSERT INTO categorys (category_id, category_name) VALUES (1,"Destacado"),(2,"Deporte"),(3,"Hombre"),(4,"Mujer"),(5,"Niño");

INSERT INTO products (product_id, product_name, product_description, product_price, product_image, category_id) VALUES
(1,"Sudadera Deportiva","Conjunto deportivo de 2 piezas para hombre, sudadera: manga larga plisada, color sólido, capucha con cordón, bolsillo canguro, ajuste entallado.",119000,"conj-dep-gris.jpg",3),
(2,"Báscula Digital","Báscula de 50cm x 50cm, de uso: domestico, institucional y profesional",68000,"bascula.jpeg",1),
(3,"Mat de Yoga Doble Fax","Las mat de yoga Sportfitness son un implemento esencial para un entrenamiento de yoga y pilates. Los tapetes de yoga están diseñados para brindar seguridad, soporte y una tracción adecuada. Longitud: 1.73cm Ancho: 61cm Espesor: 0.6cm",72000, "colchoneta-yoga.jpg",1),
(4,"Mancuerna Encauchetada","Mancuernas Sportfitness ideales para ejercicios de fuerza. Variedad de pesos que se ajustan a tu nivel de entrenamiento. Las pesas Sportfitness encauchadas tienen recubrimiento que protegen las superficies.",125000,"mancuerna-encauchetada-sportfitness.jpg",2),
(5,"Saco de Boxeo 23 KG","Mancuernas Sportfitness ideales para ejercicios de fuerza. Variedad de pesos que se ajustan a tu nivel de entrenamiento. Las pesas Sportfitness encauchadas tienen recubrimiento que protegen las superficies. Material en cuero sintético (PVC)",376000,"saco-de-boxeo-23-kg-sportfitness.jpg",2),
(6,"Set Body Pump","El set body pump Sportfitness es un implemento para levantamiento de peso y entrenamiento de fuerza. El set body pump es ideal para aumentar masa muscular, tonificar y para bajar de peso. Es un implemento versatil que tiene recubrimiento en los discos lo cual protege los suelos y aumenta su resistencia.",450000,"set-body-pump-sportfitness.jpg",2),
(7,"Colchoneta Pofesional","Las Colchonetas Sportfitness son un implemento esencial para un entrenamiento en el piso. La Colchoneta Profesional esta diseñada para proporcionar una absorción de impactos reduciendo la probabilidad de lesiones deportivas. Medidas 100cm x 47cm Espesor 3cm.",90000,"colchoneta.jpg",1),
(8,"Steps Aeróbico","Steps Sportfitness ideal para entrenamiento funcional y cardiovascular. Los beneficios del steps aeróbicos incluyen quema de calorías y tonificación muscular, especialmente glúteos y piernas. Medidas: Largo 70 cm, ancho 27 cm.",120000,"steps-aerobicos-sportfitness.jpg",2),
(9,"Sudadera Deportiva","Perfecta para ir al gimnasio, hacer ejercicio, entrenamiento de pesas, culturismo, salir a correr",130000,"conjunto.png",4),
(10,"Set de Bandas Elasticas x5","Bandas elásticas sportfitness para ejercicios en casa o gym. Ideal para trabajo funcional. Set de bandas con cinco resistencias.",32000,"bandas.png",5);

INSERT INTO users (user_id,first_name, last_name, user_email, user_password, user_image) VALUES
(1,"santiago","leon","santiagoleon12@gmail.com","satiago123","img_user_default.png"),
(2,"gabriel","gaitan","gabrielgaitan17@gmail.com","123","img_user_default.png");