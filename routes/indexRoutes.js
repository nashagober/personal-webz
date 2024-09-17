const express = require(`express`);
const indexRouter = express.Router();
const allController = require("../controllers/all");

indexRouter.get("/", allController.getAll);

module.exports = indexRouter;
