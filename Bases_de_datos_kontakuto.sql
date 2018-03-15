CREATE DATABASE kontakuto charset utf16; 

CREATE TABLE kontakuto.users (
    id_user SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(35) DEFAULT NULL UNIQUE,
    name VARCHAR(30) DEFAULT NULL,
    `password` VARCHAR(30) NOT NULL,
    first_login TIMESTAMP);
    
CREATE TABLE kontakuto.contacts (
    id_contact SMALLINT UNSIGNED AUTO_INCREMENT,
    id_user SMALLINT UNSIGNED,
    contact_name VARCHAR(20) DEFAULT NULL,
    phone VARCHAR(15) DEFAULT NULL,
    email VARCHAR(40) DEFAULT NULL,
    facebook VARCHAR(20) DEFAULT NULL,
    twitter VARCHAR(20) DEFAULT NULL,
    instagram VARCHAR(20) DEFAULT NULL,
    github VARCHAR(20) DEFAULT NULL,
    street VARCHAR(100) DEFAULT NULL,
    num_hall tinyint UNSIGNED DEFAULT NULL,
    num_flat tinyint DEFAULT NULL,
    postal_code SMALLINT UNSIGNED DEFAULT NULL,
    description TEXT DEFAULT NULL,
    PRIMARY KEY (id_contact,id_user),
    FOREIGN KEY (id_user) REFERENCES kontakuto.users (id_user));