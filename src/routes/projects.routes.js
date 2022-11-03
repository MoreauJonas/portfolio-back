const connection = require("../db-config");
const router = require("express").Router();
const multer = require("multer");
const {
  findAllProjects,
  findOneProject,
  findProjectSkills,
  findProjectLanguages,
  insertProjects,
  modifyOneProject,
  deleteProject,
} = require("../models/projects");

const upload = multer({ dest: "uploads/projects/" });

//GET
router.get("/", async (req, res) => {
  try {
    const [projects] = await findAllProjects();
    res.status(201).json([projects]);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}); //(route a interroger)--> http://localhost:8000/api/projects

//GET/id
router.get("/:id", async (req, res) => {
  try {
    const project = await findOneProject(req.params.id);
    return res.status(201).json(project[0]);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//GET/id/skills
router.get("/:id/skills", async (req, res) => {
  try {
    const skills = await findProjectSkills(req.params.id);
    return res.status(201).json(skills[0]);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//GET/id/languages
router.get("/:id/languages", async (req, res) => {
  try {
    const languages = await findProjectLanguages(req.params.id);
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
    const [{ insertId: id }] = await insertProjects(req.body, req.file.path);
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
    const project = { ...req.body };
    if (req?.file) {
      const file = Object.entries(req.file);
      project.picture = file[6][1];
    }
    const projectData = await modifyOneProject(req.params.id, project);
    return res.status(201).json(projectData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const [projectData] = await deleteProject(req.params.id);
    return res.status(201).json(projectData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
