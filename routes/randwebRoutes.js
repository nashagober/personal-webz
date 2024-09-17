const express = require(`express`);
const randwebRouter = express.Router();
const randwebController = require("../controllers/randwebController");

randwebRouter.get("/", randwebController.getRandWeb);

module.exports = randwebRouter;
