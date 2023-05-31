DROP DATABASE IF EXISTS tpjo;

CREATE DATABASE tpjo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE tpjo.sport(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    picto VARCHAR(50) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE tpjo.genre(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE tpjo.epreuve(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    sport_id TINYINT UNSIGNED,
    genre_id TINYINT UNSIGNED,
    FOREIGN KEY(sport_id) REFERENCES sport(id),
    FOREIGN KEY(genre_id) REFERENCES genre(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE tpjo.medaille(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(50) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE tpjo.athlete(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE tpjo.titre(
    athlete_id TINYINT UNSIGNED,
    medaille_id TINYINT UNSIGNED,
    epreuve_id TINYINT UNSIGNED,
    FOREIGN KEY(athlete_id) REFERENCES athlete(id),
    FOREIGN KEY(medaille_id) REFERENCES medaille(id),
    FOREIGN KEY(epreuve_id) REFERENCES epreuve(id),
    PRIMARY KEY(athlete_id, medaille_id, epreuve_id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO tpjo.sport
VALUES
    (NULL, 'football', 'football.jpg'),
    (NULL, 'natation', 'natation.jpg'),
    (NULL, 'boxe', 'boxe.jpg'),
    (NULL, "tir à l'arc", 'tir-arc.jpg')
;

INSERT INTO tpjo.genre
VALUES
    (NULL, 'Femme'),
    (NULL, 'Homme')
;

INSERT INTO tpjo.epreuve
VALUES
    (NULL, 'Individuel', 4, 1),
    (NULL, 'Individuel', 4, 2),
    (NULL, 'Par équipe', 4, 1),
    (NULL, 'Par équipe', 4, 2)
;


INSERT INTO tpjo.medaille
VALUES
    (NULL, 'Or'),
    (NULL, 'Argent'),
    (NULL, 'Bronze')
;

INSERT INTO tpjo.athlete
VALUES
    (NULL, 'Usain'),
    (NULL, 'Terry'),
    (NULL, 'Reshma'),
    (NULL, 'Islame'),
    (NULL, 'Houjdadji')
;

INSERT INTO tpjo.titre
VALUES
    (1, 1, 2),
    (4, 1, 1)
;

