// 1:je commence mon fichier principal en configurant mes outils (librairie, etc)

require("dotenv").config();
const connection = require("./db-config");
const express = require("express");
const cors = require("cors"); //(sécurisation connexion)
const morgan = require("morgan");
const app = express(); //(permet utilisation d'express sur app.js)
const router = require("./routes/index.routes");

const port = process.env.PORT || 8000; // (si probléme de variable d'env allez sur le port 8000)

// 2: utilisation des outils pour mon app
app.use(express.json()); //(traduction automatique de mes données sous format json)

// 3:ouverture de la possibilité d'utiliser un second envoi de data
app.use(express.urlencoded({ extended: true })); //(ouvrir utilisation de formulaire --> POSTMAN)

// 4: ouverture des vannes d'utilsiation de mon API (cors = cross origin)
app.use(cors()); //(permet d'appeler API qu'importe le FrontEnd) --> sinon app.use(cors(3000 ou nom de domaine))
app.use(morgan("dev"));

app.use("/uploads", express.static("uploads"));
// 5: préparation en msg d'accueil sur ma route principale --> localhost:8000
app.use("/api", router); //(conception du routeur)

app.get("/", (req, res) => {
  res.send("Welcome");
}); //(pour étre sur que le serveur écoute)

connection.connect((err) => {
  if (err) {
    console.error("error connecting :" + err.stack);
  } else {
    console.log("connected as id " + connection.threadId);
  }
}); //(si erreur je l'affiche, et si tout va bien donne une instance de connection)

app.listen(port, () => {
  console.log(`serveur is listenning on port ${port}`);
}); //(tu écoute le port de connection)

module.exports = app;
