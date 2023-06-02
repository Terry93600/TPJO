import dbConnection from "../service/db.js";


const getMedailles = async() => {
    const sql = `
        SELECT medaille.*
        FROM tpjo.medaille;
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

export { getMedailles };