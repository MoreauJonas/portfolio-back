const connection = require("../db-config");
const router = require("express").Router();
const multer = require("multer");
const {
  findAllFormations,
  insertFormation,
  findOneFormation,
  modifyOneFormation,
  deleteFormation,
} = require("../models/formations");

const upload = multer({ dest: "uploads/formations/" });

//par defaut, lors de la création du back-end, la seconde étape serait de gérer votre routing(post routing)
//idéalement, vous allez créer vos 5 routes de bases qui font référence aux verbes d'action HTTP(CRUD)

//GET
router.get("/", async (req, res) => {
  try {
    const [formations] = await findAllFormations();
    res.status(201).json([formations]);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}); //(route a interroger)--> http://localhost:8000/api/skills

//GET/id
router.get("/:id", async (req, res) => {
  try {
    const formation = await findOneFormation(req.params.id);
    return res.status(201).json(formation[0]);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//POST avec multer
router.post("/", upload.single("picture"), async (req, res) => {
  try {
    const [{ insertId: id }] = await insertFormation(req.body, req.file.path);
    return res
      .status(201)
      .json({ id, ...req.body, picture: req.file.filename });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

// PUT avec multer
router.put("/:id", upload.single("picture"), async (req, res) => {
  try {
    const formation = { ...req.body };
    if (req?.file) {
      const file = Object.entries(req.file);
      formation.picture = file[6][1];
    }
    const formationData = await modifyOneFormation(req.params.id, formation);
    return res.status(201).json(formationData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const [formationData] = await deleteFormation(req.params.id);
    return res.status(201).json(formationData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
