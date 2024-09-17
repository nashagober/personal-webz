const express = require(`express`);
const aboutmeRouter = express.Router();
const aboutmeController = require("../controllers/aboutmeController");

aboutmeRouter.get("/", aboutmeController.getAboutMe);

module.exports = aboutmeRouter;
