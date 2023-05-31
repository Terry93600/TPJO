DROP DATABASE IF EXISTS tpjo;

CREATE DATABASE tpjo;

CREATE TABLE tpjo.sport(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    picto VARCHAR(50) NOT NULL
);

CREATE TABLE tpjo.genre(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE tpjo.epreuves(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    sport_id TINYINT UNSIGNED,
    genre_id TINYINT UNSIGNED,
    FOREIGN KEY(sport_id) REFERENCES sport(id),
    FOREIGN KEY(genre_id) REFERENCES genre(id)
);

CREATE TABLE tpjo.athlete(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    athlete_id TINYINT UNSIGNED,
    sport_id TINYINT UNSIGNED,
    FOREIGN KEY(sport_id) REFERENCES sport(id)
);

CREATE TABLE tpjo.medaille(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    medaille_id TINYINT UNSIGNED,
    athlete_id TINYINT UNSIGNED,
    FOREIGN KEY(athlete_id) REFERENCES athlete(id)
);

INSERT INTO tpjo.sport
VALUES
    (NULL, 'football', 'football.jpg'),
    (NULL, 'natation', 'natation.jpg'),
    (NULL, 'boxe', 'boxe.jpg'),
    (NULL, "tir à l'arc", 'tir-arc.jpg')
;