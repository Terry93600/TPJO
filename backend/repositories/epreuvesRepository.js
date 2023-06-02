import dbConnection from "../service/db.js";


const getEpreuve = async () => {
    const sql = `
    SELECT epreuve
    FROM tpjo.epreuve
    INNER JOIN sport ON sport.id = epreuve.sport_id `
}
export { getEpreuve };