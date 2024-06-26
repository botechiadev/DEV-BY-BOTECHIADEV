-- dtbase: cnv
SET UNIQUE_CHECKS=0;
SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE=TRADITIONAL;
CREATE SCHEMA IF NOT EXISTS cnv DEFAULT CHARACTER SET utf8mb4 ;
USE cnv ;
-- tabela categoria
DROP TABLE IF EXISTS categoria CASCADE ;
CREATE TABLE categoria (
id_categ SMALLINT PRIMARY KEY,
tipo_categ CHAR(20) NOT NULL,
descr_categ VARCHAR(25) NOT NULL )
Engine = InnoDB ;
-- populando
INSERT INTO categoria VALUES ( 1, 'PASSAGEIRO', 'transporte de pessoas') ;
INSERT INTO Categoria (descr_categ, id_categ, tipo_categ)
VALUES ( 'transporte de carga', 2, 'CARGA') ;
SELECT * FROM categoria ;
-- tabela veiculo
DROP TABLE IF EXISTS veiculo CASCADE ;
CREATE TABLE veiculo (
placa CHAR(7) PRIMARY KEY ,
renavam INTEGER NOT NULL ,
num_chassis CHAR(17) NOT NULL,
ano_fabricacao SMALLINT NOT NULL,
cor CHAR(20) NOT NULL,
categ_veiculo SMALLINT NOT NULL,
situacao_veiculo CHAR(15) NOT NULL,
FOREIGN KEY (categ_veiculo) REFERENCES categoria (id_categ)
ON DELETE RESTRICT ON UPDATE CASCADE )
Engine = InnoDB ;
-- populando veiculo
INSERT INTO veiculo VALUES
( 'ABC1B34', 01094755939 , '9BM364207HC057443',2016, 'Branco', 1, 'ATIVO')
;
INSERT INTO veiculo VALUES
( 'RIO2C20', 01201760906 , '9BD19713HK3375361',2019, 'Prata', 2, 'ATIVO')
;
SELECT * FROM veiculo ;
/* Atividade 04 :
1- Montar o script em SQL para a criação das tabelas Propriedade,
Responsável, marca e modelo, no SGBD MySQL tomando como base o diagrama
acima ,
com as seguintes características :
a) Ações referenciais ON DELETE ON UPDATE quando necessário
b) Colunas que indicam instante de tempo com o tipo de dado
correspondente (DATE ou TIMESTAMP). */
-- tabela marca
DROP TABLE IF EXISTS marca CASCADE ;
CREATE TABLE marca (
sigla_marca CHAR(5) PRIMARY KEY,
nome_marca VARCHAR(25) NOT NULL,
nacionalidade VARCHAR(20) NOT NULL,
end_Matriz VARCHAR(100) NOT NULL,
fone_Matriz NUMERIC(11) NOT NULL )
ENGINE = InnoDB;
-- tabela modelo
DROP TABLE IF EXISTS modelo CASCADE ;
CREATE TABLE modelo (
idmodelo INT PRIMARY KEY ,
nome_modelo VARCHAR(25) NOT NULL,
ano_modelo YEAR NOT NULL,
potencia_CV SMALLINT(3) NOT NULL,
capacidade_passageiros SMALLINT NOT NULL,
capacidade_carga_kg SMALLINT NOT NULL,
tipo_Cambio CHAR(15) NOT NULL,
combustivel CHAR(15) NOT NULL,
tracao CHAR(3) NOT NULL,
qtde_Portas TINYINT NOT NULL,
numero_eixos TINYINT NOT NULL,
motorizacao DECIMAL(2,1) NULL,
sigla_marca CHAR(5) NOT NULL REFERENCES marca (sigla_marca)
ON DELETE NO ACTION ON UPDATE NO ACTION )
ENGINE = InnoDB;
-- tabela Responsavel
DROP TABLE IF EXISTS responsavel CASCADE ;
CREATE TABLE responsavel (
idDocumento DECIMAL(14) NOT NULL,
nome_resp VARCHAR(45) NOT NULL,
tipo_pessoa CHAR(2) NOT NULL ,
-- 'Indica se é Pessoa Jurídica com CNPJ ou Pessoa Física com CPF (PF ou
PJ)'
end_resp VARCHAR(100) NOT NULL,
fone_contato DECIMAL(11) NOT NULL,
dt_nascimento DATE NOT NULL,
situacao_resp CHAR(15) NOT NULL,
PRIMARY KEY (idDocumento))
ENGINE = InnoDB;
-- Table Propriedade
DROP TABLE IF EXISTS Propriedade CASCADE ;
CREATE TABLE Propriedade (
placa CHAR(7) NOT NULL,
idDocumento DECIMAL(14) NOT NULL,
dt_Aquisicao DATE NOT NULL,
dt_Venda DATE NULL,
vl_Venda DECIMAL(10,2) NULL,
quilometragem_aquisicao INTEGER NULL,
PRIMARY KEY (placa, idDocumento, dt_aquisicao),
FOREIGN KEY (placa) REFERENCES veiculo (placa)
ON DELETE RESTRICT ON UPDATE RESTRICT,
FOREIGN KEY (idDocumento) REFERENCES responsavel (idDocumento)
ON DELETE RESTRICT ON UPDATE RESTRICT)
ENGINE = InnoDB;
/* 2 – Crie uma nova tabela País (código e nome) e relacione com
Responsável e marca.
Resolva os relacionamentos com as chaves estrangeiras e atualize as
tabelas relacionadas. */
DROP TABLE IF EXISTS pais CASCADE ;
CREATE TABLE pais (
sigla_pais CHAR(3) PRIMARY KEY ,
nome_pais VARCHAR(30) NOT NULL )
Engine = InnoDB ;
INSERT INTO pais VALUES ('BRA', 'Brasil') ;
INSERT INTO pais VALUES ('EUA', 'Estados Unidos da America') ;
INSERT INTO pais VALUES ('GER', 'Alemanha') ;
INSERT INTO pais VALUES ('FRA', 'Franca') ;
-- relacionando com responsavel
ALTER TABLE responsavel ADD COLUMN pais_resp CHAR(3) REFERENCES pais
(sigla_pais) ;
-- relacionando com marca
ALTER TABLE marca ADD COLUMN pais_marca CHAR(3) REFERENCES pais
(sigla_pais) ;
ALTER TABLE marca DROP COLUMN nacionalidade ;
/* 3- Com o comando ALTER TABLE :
a) Inclua uma nova coluna Observações em Propriedade */
ALTER TABLE propriedade ADD COLUMN observacoes VARCHAR(100) NOT NULL ;
-- b) altere o tipo de dados em alguma coluna da tabela modelo.
ALTER TABLE modelo MODIFY COLUMN capacidade_carga_kg SMALLINT ;
-- c) renomeie uma coluna na tabela Responsável.
ALTER TABLE responsavel RENAME COLUMN dt_nascimento TO dt_nascto ;
-- d) atribua um valor DEFAULT para a coluna Tipo Combustivel em modelo :
FLEX.
ALTER TABLE modelo MODIFY COLUMN combustivel CHAR(15) DEFAULT 'FLEX' ;
-- 4 – Popule cada tabela nova com 3 linhas.
-- marca
DESC marca ;
INSERT INTO marca VALUES ( 'VW', 'Volkswagen', 'Via Anchieta, 10000 - Sao
Bernardo do Campo', 1154321000, 'GER'),
('GM', 'General Motors', 'Avenida Goias, 2000 - Sao Caetano do Sul',
1155881000, 'EUA'),
('REN', 'Renault', 'Avenida Franca, 1000 - Sao Jose dos Campos',
1932001000, 'EUA') ;
-- modelo
DESC modelo ;
INSERT INTO modelo VALUES ( 10, 'Gol MPI', 2020, 100, 5, 500, 'MANUAL',
default, '4x2', 5, 2, '1.6', 'VW') ;
INSERT INTO modelo VALUES ( 11, 'Jetta', 2019, 130, 5, 650, 'AUTO',
default, '4x2', 5, 2, '2.0', 'VW'),
( 20, 'Sandero Stepway', 2017, 105, 5, 350, 'MANUAL', default, '4x2', 5,
2, '1.6', 'REN'),
( 21, 'Duster TCE Iconic', 2023, 170, 5, 550, 'AUTO', default, '4x2', 5,
2, '1.3', 'REN'),
( 30, 'Onix LT', 2024, 82, 5, 350, 'MANUAL', default, '4x2', 5, 2, '1.0',
'GM'),
( 31, 'Tracker Turbo LTZ', 2024, 116, 5, 400, 'AUTO', default, '4x2', 5,
2, '1.0', 'GM');
SELECT * FROM modelo ;
-- responsavel
DESC responsavel ;
ALTER TABLE responsavel MODIFY COLUMN dt_nascto DATE NULL ;
INSERT INTO responsavel VALUES ( 1234, 'Jose Firmino de Aguiar', 'PF',
'Rua Azul, 100-Vila Mariana-Sao Paulo',
11987654321, STR_TO_DATE("10/03/1975", "%d/%m/%Y" ), 'ATIVO', 'BRA') ;
INSERT INTO responsavel VALUES ( 5678, 'Heloisa Ribeiro do Amaral', 'PF',
'Rua Branca, 100-apto 11-Vila Industrial-Santo Andre',
11982113344, STR_TO_DATE("20/07/1995", "%d/%m/%Y" ), 'ATIVO', 'BRA'),
( 884455, 'XYZ Comercio e Industria Ltda', 'PJ', 'Rua do Aluminio, 300-
Vila Operaria-Curitiba',
4155090807,null , 'ATIVO', 'BRA') ;
SELECT * FROM responsavel ;
-- propriedade
-- inserindo mais um veiculo
INSERT INTO veiculo VALUES
( 'FGH1L29', 01094755432 , '9XW364207HC057443',2019, 'Azul', 1, 'ATIVO') ;
SELECT * FROM veiculo ;
-- relacionando veiculo com modelo
ALTER TABLE veiculo ADD idmodelo INT REFERENCES modelo ON DELETE RESTRICT
ON UPDATE CASCADE ;
UPDATE veiculo SET idmodelo = 10 WHERE placa = 'ABC1B34' ;
UPDATE veiculo SET idmodelo = 20, ano_fabricacao = 2018 WHERE placa =
'FGH1L29' ;
UPDATE veiculo SET idmodelo = 11 WHERE placa = 'RIO2C20' ;
-- propriedade
DESC propriedade ;
INSERT INTO propriedade VALUES ( 'ABC1B34', 1234,
STR_TO_DATE("22/02/2022", "%d/%m/%Y" ), null, null, 22341, 'Bom estado');
INSERT INTO propriedade VALUES ( 'FGH1L29', 5678,
STR_TO_DATE("12/12/2020", "%d/%m/%Y" ), null, null, 65341, 'Amassado na
porta'),
( 'RIO2C20', 884455, STR_TO_DATE("15/11/2019", "%d/%m/%Y" ),
STR_TO_DATE("04/04/2021", "%d/%m/%Y" ), 75000, 0 , 'Zero km'),
( 'RIO2C20', 1234, STR_TO_DATE("04/04/2021", "%d/%m/%Y" ), null,
null,19565 , 'Bom estado') ;
SELECT * FROM propriedade ;
SET FOREIGN_KEY_CHECKS=1;
