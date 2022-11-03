const connection = require("../db-config");
const router = require("express").Router();
const multer = require("multer");
const {
  findAllSkill,
  insertSkills,
  findOneSkill,
  modifyOneSkill,
  deleteSkill,
} = require("../models/skills");

const upload = multer({ dest: "uploads/skills/" });

//par defaut, lors de la création du back-end, la seconde étape serait de gérer votre routing(post routing)
//idéalement, vous allez créer vos 5 routes de bases qui font référence aux verbes d'action HTTP(CRUD)

//GET
router.get("/", async (req, res) => {
  try {
    const [skills] = await findAllSkill();
    res.status(201).json([skills]);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}); //(route a interroger)--> http://localhost:8000/api/skills

//GET/id
router.get("/:id", async (req, res) => {
  try {
    const skill = await findOneSkill(req.params.id);
    return res.status(201).json(skill[0]);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

////POST sans multer
// router.post("/", (req, res) => {
//   const { name, picture } = req.body;
//   connection.query(
//     "INSERT INTO skills (name, picture, profil_id)VALUES (?,?,?)",
//     [name, picture, (profil_id = 1)],
//     (err, result) => {
//       if (err) {
//         res.status(500).send("Error retrieving skills from database");
//       } else {
//         const id = result.insertId;
//         const createSkill = { id, name, picture, profil_id };
//         res.status(201).json(createSkill);
//       }
//     }
//   );
// });

//POST avec multer
router.post("/", upload.single("picture"), async (req, res) => {
  try {
    const [{ insertId: id }] = await insertSkills(req.body, req.file.path);
    return res
      .status(201)
      .json({ id, ...req.body, picture: req.file.filename });
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

// // PUT sans multer
// router.put("/:id", (req, res) => {
//   const skillId = req.params.id;
//   connection.query(
//     "UPDATE skills SET ? WHERE id = ?",
//     [req.body, skillId],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).send("Error updating a skill");
//       } else {
//         if (result.affectedRows) {
//           const updatedSkill = {
//             ...req.body,
//           };
//           return res.status(201).json(updatedSkill);
//         } else
//           return res.status(404).send(`Skill with id ${skillId} not found`);
//       }
//     }
//   );
// });

// PUT avec multer
router.put("/:id", upload.single("picture"), async (req, res) => {
  try {
    const skill = { ...req.body };
    if (req?.file) {
      const file = Object.entries(req.file);
      skill.picture = file[6][1];
    }
    const skillData = await modifyOneSkill(req.params.id, skill);
    return res.status(201).json(skillData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const [skillData] = await deleteSkill(req.params.id);
    return res.status(201).json(skillData);
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;
