const express = require(`express`);
const vidsRouter = express.Router();
const vidsController = require("../controllers/vidsController");

vidsRouter.get("/", vidsController.getVids);

module.exports = vidsRouter;
