const express = require("express");
const app = express();
const path = require("node:path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const aboutmeRouter = require(`./routes/aboutmeRoutes`);
const blogRouter = require(`./routes/blogRoutes`);
const picsRouter = require(`./routes/picsRoutes`);
const projectsRouter = require(`./routes/projectsRoutes`);
const randwebRouter = require(`./routes/randwebRoutes`);
const thingsilikeRouter = require(`./routes/thingsilikeRoutes`);
const vidsRouter = require(`./routes/vidsRoutes`);
const indexRouter = require(`./routes/indexRoutes`);

app.use("/aboutme", aboutmeRouter);
app.use("/blog", blogRouter);
app.use("/pics", picsRouter);
app.use("/projects", projectsRouter);
app.use("/randweb", randwebRouter);
app.use("/thingsilike", thingsilikeRouter);
app.use("/vids", vidsRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}!`));
