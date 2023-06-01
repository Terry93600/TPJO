import dbConnection from "../service/db.js";

const getTitre = async () => {
    const sql = `
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
    `;

    try {
        const [results] = await dbConnection.execute(sql);
        console.log(results);
        return results;
    } catch (error) {
        // console.log(error);
        return error;
    }
}
export { getTitre }