const express = require(`express`);
const thingsilikeRouter = express.Router();
const thingsilikeController = require("../controllers/thingsilikeController");

thingsilikeRouter.get("/", thingsilikeController.getThingsILike);

module.exports = thingsilikeRouter;
