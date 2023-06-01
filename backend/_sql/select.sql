-- table de jointure entre la table sport et epreuves

SELECT epreuve.name AS epreuves, sport.name AS sport, genre.name AS genre
FROM tpjo.epreuve
JOIN tpjo.sport
ON sport.id = epreuve.sport_id
JOIN tpjo.genre
ON genre.id = epreuve.genre_id
;