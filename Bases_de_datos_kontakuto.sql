create database kontakuto charset utf16; 

create table kontakuto.users (
    id_user smallint unsigned auto_increment default '0' primary key,
    name varchar(30) default Null,
    `password` varchar(30) not null,
    first_login timestamp,
    email varchar(35) default Null);
    
create table kontakuto.contacts (
    id_contact smallint unsigned auto_increment default '0',
    id_user smallint unsigned,
    num_phone1 varchar(15) default null,
    num_phone2 varchar(15) default null,
    num_phone3 varchar(15) default null,
    email1 varchar(40) default null,
    email2 varchar(40) default null,
    email3 varchar(40) default null,
    facebook varchar(20) default null,
    twitter varchar(20) default null,
    instagram varchar(20) default null,
    github varchar(20) default null,
    street varchar(100) default null,
    num_hall tinyint unsigned default null,
    num_flat tinyint default null,
    postal_code smallint unsigned default null,
    description text default null,
    primary key (id_contact,id_user),
    foreign key (id_user) REFERENCES kontakuto.usuarios (id_user)); 