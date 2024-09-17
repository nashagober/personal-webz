const fs = require(`fs`);
const path = require(`path`);
const getPics = (req, res) => {
  const imagesDir = "../personalwebsite/public/pics";
  console.log(imagesDir);
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      res.status(500).send("Error reading directory.");
    } else {
      const images = files.filter((file) => {
        return [".jpg", ".jpeg", ".png", ".gif"].includes(
          path.extname(file).toLowerCase()
        );
      });

      res.render("pics", { images });
    }
  });
};

module.exports = {
  getPics,
};
