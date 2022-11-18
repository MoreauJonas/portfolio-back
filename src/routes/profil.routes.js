const connection = require("../db-config");
const router = require("express").Router();
const multer = require("multer");
const { findAllProfil, modifyOneProfil } = require("../models/profil");

const upload = multer({ dest: "uploads/profil/" });

//GET
router.get("/", async (req, res) => {
  try {
    const [profil] = await findAllProfil();
    res.status(201).json(profil);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}); //(route a interroger)--> http://localhost:8000/api/profil

// PUT avec multer

router.put("/:id", upload.single("picture"), async (req, res) => {
  try {
    const profil = { ...req.body };
    if (req?.file) {
      const file = Object.entries(req.file);
      profil.picture = file[6][1];
    }
    const profilData = await modifyOneProfil(req.params.id, profil);
    return res.status(201).json(profilData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
