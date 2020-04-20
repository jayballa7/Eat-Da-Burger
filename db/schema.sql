DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
use burger_db;

CREATE TABLE burgers 
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

DROP table burgers;