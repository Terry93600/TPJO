import { getResults } from "../repositories/sportRepository.js";

const index = (req, res) => {
    getResults().then( data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
};

const sport = (req, res) => {
    return res.json({data: [ 'reshma', 'islame' ]})
}

export { index, sport };