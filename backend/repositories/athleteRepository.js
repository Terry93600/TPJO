import dbConnection from "../service/db.js";


const getAthlete = async() => {
    const sql = `
        SELECT athelete.*
        FROM tpjo.athelete;
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

export { getAthlete };