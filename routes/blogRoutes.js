const express = require(`express`);
const blogRouter = express.Router();
const blogController = require("../controllers/blogController");

blogRouter.get("/", blogController.getBlog);

module.exports = blogRouter;
