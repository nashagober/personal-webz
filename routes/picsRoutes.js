const express = require(`express`);
const picsRouter = express.Router();
const picsController = require("../controllers/picsController");

picsRouter.get("/", picsController.getPics);

module.exports = picsRouter;
