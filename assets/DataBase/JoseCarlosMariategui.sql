-- Active: 1697593030080@@localhost@3306@josecarlosmariategui
CREATE DATABASE JoseCarlosMariategui;

USE JoseCarlosMariategui;

CREATE TABLE FORMULARIO (
    id INT NOT NULL AUTO_INCREMENT,
    nombres VARCHAR(60) NOT NULL,
    apellidos VARCHAR(80) NOT NULL,
    email VARCHAR(80) NOT NULL,
    telefono CHAR(9) NOT NULL,
    asunto VARCHAR(100) NOT NULL,
    mensaje VARCHAR(200) NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT PERSONA_pk PRIMARY KEY (id),
    CONSTRAINT EMAIL_formato CHECK (email REGEXP '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'),
    CONSTRAINT TELEFONO_formato CHECK (telefono REGEXP '^[0-9]{9}$')
) COMMENT 'Campos que va a tener el formulario';

CREATE TABLE FECHAS_CIVICAS (
    id int  NOT NULL AUTO_INCREMENT,
    fecha date  NOT NULL,
    descripcion varchar(200)  NOT NULL,
    activo char(1) NOT NULL DEFAULT ('I'),
    CONSTRAINT FECHAS_CIVICAS_pk PRIMARY KEY (id),
	CONSTRAINT FECHA_UNICA UNIQUE (fecha)
);
DROP TABLE FECHAS_CIVICAS;

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Restricciones de contraseñas seguras (longitud mínima, complejidad, etc.)
    CHECK (CHAR_LENGTH(password) >= 8),
    CHECK (password REGEXP '[A-Z]'),
    CHECK (password REGEXP '[a-z]'),
    CHECK (password REGEXP '[0-9]'),

    -- Restricción para el formato de correo electrónico
    CHECK (correo REGEXP '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')
);

DROP TABLE USUARIOS;
-- Datos de ejemplo
INSERT INTO Usuarios (nombre, apellido, correo, password) VALUES
('Isael', 'Fatama', 'isael.fatama@vallegrande.edu.pe', 'contraseñanose12345'),
('Anderson', 'Huayta', 'anderson.huayta@vallegrande.edu.pe', 'P@ssw0rd');

SELECT * FROM USUARIOS;

INSERT INTO FORMULARIO (nombres, apellidos, email, telefono, asunto, mensaje) 
VALUES ('Isael', 'Fatama', 'juan@gmail.com', '123456789', 'Consulta', 'Mensaje de prueba');

SELECT * FROM FORMULARIO;

INSERT INTO FECHAS_CIVICAS (fecha, descripcion)
VALUES ('2023-07-21', 'Día de la Independencia de Perú'),
('2023');

SELECT * FROM FECHAS_CIVICAS;


