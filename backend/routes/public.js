// import
import express from "express";
import { index, sport } from "../controllers/publicController.js";

// créer le routeur
const publicRouter = express.Router();

/*
	créer les routes:
		- méthode HTTP utilisée
		- URL de la route
		- middleware appelé par la route
*/

publicRouter.get("/", index);
publicRouter.get("/sport", sport);

// creer une route en poste recuperer les donnes| exemple:
// publicRouter.post('/uneroute', uneroute);

// exporter le routeur
export default publicRouter;
