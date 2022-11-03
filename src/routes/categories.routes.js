const connection = require("../db-config");
const router = require("express").Router();

const {
  findAllCategories,
  insertCategorie,
  findOneCategorie,
  modifyOneCategories,
  deleteCategories,
} = require("../models/categories");

router.get("/", async (req, res) => {
  try {
    const [categories] = await findAllCategories();
    res.status(201).json([categories]);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}); //(route a interroger)--> http://localhost:8000/api/categories

//GET/id
router.get("/:id", async (req, res) => {
  try {
    const categorie = await findOneCategorie(req.params.id);
    return res.status(201).json(categorie[0]);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//POST sans multer
router.post("/", async (req, res) => {
  try {
    const [{ insertId: id }] = await insertCategorie(req.body);
    return res.status(201).json({ id, ...req.body });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

// PUT sans multer
router.put("/:id", async (req, res) => {
  try {
    const categorie = { ...req.body };
    const categorieData = await modifyOneCategories(req.params.id, categorie);
    return res.status(201).json(categorieData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const [categorieData] = await deleteCategories(req.params.id);
    return res.status(201).json(categorieData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
