// import
import express from "express";
import { index, titre } from "../controllers/publicController.js";


// créer le routeur
const publicRouter = express.Router();

/*
	créer les routes:
		- méthode HTTP utilisée
		- URL de la route
		- middleware appelé par la route
*/

publicRouter.get("/sports", index);
// publicRouter.get("/sport", sport);
publicRouter.get("/titre", titre);
// creer une route en poste recuperer les donnes| exemple:
// publicRouter.post('/uneroute', uneroute);

// exporter le routeur
export default publicRouter;
