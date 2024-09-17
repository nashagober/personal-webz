const express = require(`express`);
const projectsRouter = express.Router();
const projectsController = require("../controllers/projectsController");

projectsRouter.get("/", projectsController.getProjects);

module.exports = projectsRouter;
