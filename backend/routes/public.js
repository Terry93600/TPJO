// import
import express from "express";
import { athlete, index, medailles, epreuve, genre, titre,pstSport} from "../controllers/publicController.js";



// créer le routeur
const publicRouter = express.Router();

/*
	créer les routes:
		- méthode HTTP utilisée
		- URL de la route
		- middleware appelé par la route
*/
// get 
publicRouter.get("/sports", index);

publicRouter.get("/epreuves", epreuve);
publicRouter.get("/medailles", medailles);
publicRouter.get("/genre", genre);
publicRouter.get("/titre", titre);


// creer une route en poste recuperer les donnes | les athletes et leur genre:
publicRouter.post("/athletes", athlete);
// 
publicRouter.post("/sports", pstSport);
publicRouter.post("/epreuves", epreuve);



// exporter le routeur
export default publicRouter;
