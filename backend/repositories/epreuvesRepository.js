import dbConnection from "../service/db.js";


const getEpreuve = async () => {
    const sql = `
    SELECT epreuve
    FROM tpjo.epreuve
    INNER JOIN sport ON sport.id = epreuve.sport_id `;

    try {
        const [results] = await dbConnection.execute(sql);
        // console.log(results);
        return results;
    } catch (error) {
        // console.log(error);
        return error;
    }

}
export { getEpreuve };