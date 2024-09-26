-- Creación de la base de datos y uso de la misma
CREATE DATABASE senasoft;
USE senasoft;

-- Tablas auxiliares
CREATE TABLE tipo_identificacion (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    abreviatura VARCHAR(4) NOT NULL,
    nombre_documento VARCHAR(100) NOT NULL UNIQUE,
    estado BOOLEAN DEFAULT true NOT NULL
);

CREATE TABLE tipo_profesion (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_profesion VARCHAR(100) NOT NULL UNIQUE,
    estado BOOLEAN DEFAULT true NOT NULL
);

CREATE TABLE tipo_resultado (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_resultado VARCHAR(100) NOT NULL UNIQUE,
    estado BOOLEAN DEFAULT true NOT NULL
);

CREATE TABLE reg_seg_social (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_reg_social VARCHAR(150) NOT NULL UNIQUE,
    estado BOOLEAN DEFAULT true NOT NULL
);

CREATE TABLE eps (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(8) NOT NULL,
    razon_social VARCHAR(250) NOT NULL,
    nit VARCHAR(20) NOT  NULL,
    estado BOOLEAN DEFAULT true NOT NULL
);

CREATE TABLE nivel (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_eps INT NOT NULL,
    nivel VARCHAR(4) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    id_regimen INT NOT NULL,
    FOREIGN KEY (id_regimen) REFERENCES reg_seg_social(id)
);

-- Tablas principales
CREATE TABLE persona (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_tipo_doc INT NOT NULL,
    numero_documento VARCHAR(15) NOT NULL UNIQUE,
    apellido1 VARCHAR(20) NOT NULL,
    apellido2 VARCHAR(20) NOT NULL,
    nombre1 VARCHAR(20) NOT NULL,
    nombre2 VARCHAR(20) NULL,
    fecha_nacimiento DATE NOT NULL,
    sexo_biologico CHAR(1) NOT NULL CHECK (sexo_biologico IN ('M', 'F')),
    direccion VARCHAR(250),
    tel_movil VARCHAR(10),
    email VARCHAR(250),
    FOREIGN KEY (id_tipo_doc) REFERENCES tipo_identificacion(id)
);

CREATE TABLE profesional (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_tipo_prof INT,
    codigo VARCHAR(4) NOT NULL,
    id_persona INT,
    registro_medico VARCHAR(20),
    FOREIGN KEY (id_tipo_prof) REFERENCES tipo_profesion(id),
    FOREIGN KEY (id_persona) REFERENCES persona(id)
);

CREATE TABLE historia (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_persona INT NOT NULL,
    id_nivel INT,
    historia VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id),
    FOREIGN KEY (id_nivel) REFERENCES nivel(id)
);

CREATE TABLE tipo_documento (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(4) NOT NULL,
    nombre_documento VARCHAR(100) NOT NULL UNIQUE,
    estado BOOLEAN DEFAULT true NOT NULL
);

CREATE TABLE orden (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_documento INT,
    orden NUMERIC(10,0) NOT NULL,
    fecha TIMESTAMP,
    id_historia INT,
    id_profesional INT,
    profesional_externo BOOLEAN DEFAULT false NOT NULL,
    FOREIGN KEY (id_documento) REFERENCES tipo_documento(id),
    FOREIGN KEY (id_historia) REFERENCES historia(id),
    FOREIGN KEY (id_profesional) REFERENCES profesional(id)
);

CREATE TABLE cups (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(8) NOT NULL,
    nombre VARCHAR(500) NOT NULL,
    estado BOOLEAN DEFAULT true
);

CREATE TABLE grupo_lab (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(2) NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    estado BOOLEAN DEFAULT true NOT NULL
);

CREATE TABLE procedimientos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cups INT NOT NULL,
    id_grupo_lab INT NOT NULL,
    metodo VARCHAR(60),
    FOREIGN KEY (id_cups) REFERENCES cups(id),
    FOREIGN KEY (id_grupo_lab) REFERENCES grupo_lab(id)
);

CREATE TABLE pruebas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_procedimiento INT NOT NULL,
    id_tipo_resultado INT NOT NULL,
    codigo_prueba VARCHAR(6) NOT NULL,
    nombre_prueba VARCHAR(200) NOT NULL,
    unidad VARCHAR(20) NOT NULL,
    estado BOOLEAN DEFAULT true NOT NULL,
    FOREIGN KEY (id_tipo_resultado) REFERENCES tipo_resultado(id),
    FOREIGN KEY (id_procedimiento) REFERENCES procedimientos(id)
);

CREATE TABLE pruebas_opciones (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_prueba INT NOT NULL,
    opcion VARCHAR(250) NOT NULL,
    valor_ref_min_f NUMERIC(15,2),
    valor_ref_max_f NUMERIC(15,2),
    valor_ref_min_m NUMERIC(15,2),
    valor_ref_max_m NUMERIC(15,2),
    FOREIGN KEY (id_prueba) REFERENCES pruebas(id)
);

CREATE TABLE orden_resultados (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha TIMESTAMP,
    id_orden INT NOT NULL,
    id_procedimiento INT NOT NULL,
    id_prueba INT NOT NULL,
    id_prueba_opcion INT,
    res_opcion VARCHAR(250),
    res_numerico NUMERIC(16,4),
    res_texto VARCHAR(60),
    res_memo VARCHAR(2500),
    num_procesamientos INT,
    FOREIGN KEY (id_prueba) REFERENCES pruebas(id),
    FOREIGN KEY (id_procedimiento) REFERENCES procedimientos(id),
    FOREIGN KEY (id_orden) REFERENCES orden(id),
    FOREIGN KEY (id_prueba_opcion) REFERENCES pruebas_opciones(id)
);
