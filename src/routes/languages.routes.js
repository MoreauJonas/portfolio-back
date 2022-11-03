const connection = require("../db-config");
const router = require("express").Router();
const multer = require("multer");
const {
  findAllLanguages,
  insertLanguage,
  findOneLanguages,
  modifyOneLanguage,
  deleteLanguage,
} = require("../models/languages");

const upload = multer({ dest: "uploads/languages/" });

//par defaut, lors de la création du back-end, la seconde étape serait de gérer votre routing(post routing)
//idéalement, vous allez créer vos 5 routes de bases qui font référence aux verbes d'action HTTP(CRUD)

//GET
router.get("/", async (req, res) => {
  try {
    const [languages] = await findAllLanguages();
    res.status(201).json([languages]);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}); //(route a interroger)--> http://localhost:8000/api/languages

//GET/id
router.get("/:id", async (req, res) => {
  try {
    const languages = await findOneLanguages(req.params.id);
    return res.status(201).json(languages[0]);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//POST avec multer
router.post("/", upload.single("picture"), async (req, res) => {
  try {
    const [{ insertId: id }] = await insertLanguage(req.body, req.file.path);
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
    const language = { ...req.body };
    if (req?.file) {
      const file = Object.entries(req.file);
      language.picture = file[6][1];
    }
    const languageData = await modifyOneLanguage(req.params.id, language);
    return res.status(201).json(languageData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const [languageData] = await deleteLanguage(req.params.id);
    return res.status(201).json(languageData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
