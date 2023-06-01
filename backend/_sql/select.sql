SELECT epreuve.name AS epreuve, sport.name AS sport, genre.name AS genre
FROM tpjo.epreuve
JOIN tpjo.sport
ON sport.id = epreuve.sport_id
JOIN tpjo.genre
ON genre.id = epreuve.genre_id
;

SELECT athlete.name AS athlete, sport.name AS sport, epreuve.name AS epreuve, medaille.type, genre.name AS genre
from tpjo.titre
JOIN tpjo.athlete 
ON athlete.id = titre.athlete_id
JOIN tpjo.medaille 
ON medaille.id = titre.medaille_id
JOIN tpjo.epreuve 
ON epreuve.id = titre.epreuve_id
JOIN tpjo.sport 
ON sport.id = epreuve.sport_id 
JOIN tpjo.genre 
ON genre.id = epreuve.genre_id 
;