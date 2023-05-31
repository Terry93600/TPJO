import * as fs from "node:fs/promises";
import https from "node:https";
import express from "express";
import publicRouter from "./routes/public.js";
import * as dotenv from 'dotenv';

// configuration du serveur
const options = {
	key: await fs.readFile("ca/key.pem"),
	cert: await fs.readFile("ca/cert.pem"),
};

// dotenv.config();
// process.env.terry


// créer une application express
const app = express();

// routage de l'application
const router = express.Router();

app.use('/', router);

// dossier des ressources externes
// router.use(express.static("public"));

// acceder a une propriete body d'une req dont les donné sont en json
router.use(express.json());

// appel des routeurs avec un préfixe
router.use("/api", publicRouter);
// router.get('/', (req, res) => res.send('ok'));

// création du serveur
const server = https.createServer(options, app);

// exportation du serveur
export default server;