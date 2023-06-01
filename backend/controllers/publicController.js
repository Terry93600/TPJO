
import { getSports } from "../repositories/sportRepository.js";
import { getAthlete } from "../repositories/athleteRepository.js";
import { getMedailles } from "../repositories/medaillesRepository.js";
import { getGenre } from "../repositories/genreRepository.js";
import { getEpreuve } from "../repositories/epreuvesRepository.js";
import { getTitre } from "../repositories/titreRepository.js";


// index = homepage =  sports 
const index = (req, res) => {
    getSports().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};


const epreuve = (req, res) => {
    getEpreuve().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

const athlete = (req, res) => {
    getAthlete().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

const medailles = (req, res) => {
    getMedailles().then( data => {
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

export { index, athlete, medailles, epreuve, genre, titre };

