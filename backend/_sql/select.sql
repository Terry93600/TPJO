SELECT epreuve.name AS epreuve, sport.name AS sport, genre.name AS genre
FROM tpjo.epreuve
JOIN tpjo.sport
ON sport.id = epreuve.sport_id
JOIN tpjo.genre
ON genre.id = epreuve.genre_id
;