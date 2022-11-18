const connection = require("../db-config");
const router = require("express").Router();
const Joi = require("joi");
const argon2 = require("argon2");

// schéma de validation pour renforcer la sécurité des inputs (minimum)
const userSchema = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().required().min(8),
});

const {
  findAllUsers,
  insertUser,
  findUserByEmail,
  findOneUser,
  modifyOneUser,
  deleteUser,
} = require("../models/users");

const checkJwt = require("../middlewares/checkJwt");
const { generateJwt } = require("../utils/auth");

// //GET
router.get("/", checkJwt, async (req, res) => {
  try {
    const [users] = await findAllUsers();
    res.status(201).json(users);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}); //(route a interroger)--> http://localhost:8000/api/users

//GET/id
router.get("/:id", checkJwt, async (req, res) => {
  try {
    const user = await findOneUser(req.params.id);
    return res.status(201).json(user[0]);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//POST avec validator
router.post("/", async (req, res) => {
  //validation du schéma en analysant le req.body de la requete POST
  //verification de la validité et intégrité des données envoyés

  // si error on stop tout et on affiche l'erreur en question
  const { value, error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }

  //vérification si pas de doublon (mail)
  const [[existingUser]] = await findUserByEmail(value.mail);
  if (existingUser) {
    return res
      .status(409)
      .json({ message: "l'utilisateur existe déjà dans la Base de données" });
  }
  const hashedPassword = await argon2.hash(value.password);
  await insertUser(value.mail, hashedPassword);
  const jwtKey = generateJwt(value.mail);
  return res.json({
    message: "L'utilisateur a bien été créé",
    credentials: jwtKey,
  });
});

router.post("/login", async (req, res) => {
  //vérification du schéma du formulaire, et l'existence du mail dans la BDD
  const { value, error } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json(error);
  }

  //avoir un compte existant pour pouvoir se logger
  const [[existingUser]] = await findUserByEmail(value.mail);
  if (!existingUser) {
    res.status(403).json({ message: "L'utilisateur n'existe pas !" });
  }
  const verified = await argon2.verify(existingUser.password, value.password);
  if (!verified) {
    return res.status(403).json({
      message:
        "Le mot de passe n'existe pas ou ne correspond pas au mot de passe utilisateur",
    });
  }
  const jwtKey = generateJwt(value.mail);
  return res.json({ credentials: jwtKey });
});

// //POST sans validator
// router.post("/", async (req, res) => {
//   try {
//     const [{ insertId: id }] = await insertUser(req.body);
//     return res.status(201).json({ id, ...req.body });
//   } catch (err) {
//     return res.status(500).json({
//       message: err,
//     });
//   }
// });

// PUT
router.put("/:id", async (req, res) => {
  try {
    const userData = await modifyOneUser(req.params.id, req.body);
    return res.status(201).json(userData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//DELETE
router.delete("/:id", checkJwt, async (req, res) => {
  try {
    const [userData] = await deleteUser(req.params.id);
    return res.status(201).json(userData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
