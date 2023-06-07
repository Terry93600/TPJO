import dbConnection from "../service/db.js";


const getSports = async() => {
    const sql = `
        SELECT sport.*
        FROM tpjo.sport;
    `;

    try {
        const [results] = await dbConnection.execute(sql);
        // console.log(results);
        return results;
    } catch (error) {
        // console.log(error);
        return error;
    }
}


// post d'un sport dans la bdd on utilise insert ainsi que la reprise des noms de nos colonnes(bdd):
const postSports = async (data) => {
    const sql = `
        INSERT INTO tpjo.sport
        VALUES (NULL, :name, :picto);
    `;

    try {
        const [results] = await dbConnection.execute(sql, data);
        // console.log(results);
        return results;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

export { getSports, postSports };