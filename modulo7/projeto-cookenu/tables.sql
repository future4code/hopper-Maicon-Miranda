-- Active: 1659483686265@@35.226.146.116@3306@Hopper-4314078-maicon-jesus

CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(1024) DEFAULT "No description provided",
    criacao DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Auth_users(id)
);


