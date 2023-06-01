import { getResults } from "../repositories/sportRepository.js";
import { getTitre } from "../repositories/titreRepository.js";


const index = (req, res) => {
    getResults().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

const titre = (req, res) => {
    getTitre().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

export { index, titre };