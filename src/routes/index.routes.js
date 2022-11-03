const router = require("express").Router(); //(donne accés à la méthode de routing d'express)
const skillRouter = require("./skills.routes");
const projectRouter = require("./projects.routes");
const categoryRouter = require("./categories.routes");
const languageRouter = require("./languages.routes");
const formationRouter = require("./formations.routes");
const profilRouter = require("./profil.routes");
const userRouter = require("./users.routes");

//(toujours mettre au pluriel)
router.use("/skills", skillRouter);
router.use("/projects", projectRouter);
router.use("/categories", categoryRouter);
router.use("/languages", languageRouter);
router.use("/formations", formationRouter);
router.use("/profil", profilRouter);
router.use("/users", userRouter);

module.exports = router;
