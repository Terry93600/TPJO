import dbConnection from "../service/db.js";


const getGenre = async() => {
    const sql = `
        SELECT genre.*
        FROM tpjo.genre;
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

export { getGenre };