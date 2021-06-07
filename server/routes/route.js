var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");

// GET MOVIES /YEARS
router.get("/movies/:year", async (req, res) => {
  if (!req.params) return;

   var year = req.params.year
    var MOVIES =  path.join(__dirname, `../data/Movies_${year}.json`);


  fs.readFile(MOVIES, "utf8", (err, data) => {
    if (data) res.send(data);
    if (err) res.send(err);
  });
});

module.exports = router;
