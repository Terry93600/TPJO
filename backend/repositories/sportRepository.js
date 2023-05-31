import dbConnection from "../service/db.js";


const getResults = async() => {
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

export { getResults };