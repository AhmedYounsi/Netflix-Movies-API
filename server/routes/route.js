var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");
const { resolveSoa } = require("dns");

// router.get("/movies/:all", (req, res) => {
// console.log(req.query);
//  res.send('hello')
// })

// GET ALL CHARACTERS
router.get("/movies/:year", (req, res) => {

  if (["2015", "2016", "2017"].includes(req.params.year)) {
    var Movies = path.join(__dirname, `../data/movies_2017..2015.json`);
  } else   if (["2018", "2019", "2020","2021"].includes(req.params.year)) {
    var Movies = path.join(__dirname, `../data/movies_${req.params.year}.json`);
  }
  else {
  res.status(404).send('invalid endpoint')
  return
  }

    
  fs.readFile(Movies, "utf8", async (err, data) => {
    var arr = await JSON.parse(data);

    var language = "";

    if (req.query.language) {
      language = req.query.language;
      data = arr.filter(
        (x) => x.Language.toLowerCase() == language.toLowerCase()
      );
    } else if (req.query.genre) {
      data = arr.filter((x) =>
        x.Genre.toLowerCase().includes(req.query.genre.toLowerCase())
      );
    }

    if (data) res.send(data);
    if (err) res.send(err);
  });
});


router.get('/movies',(req,res)=>{
  var Movies = path.join(__dirname, `../data/movies.json`);

  fs.readFile(Movies, "utf8", async (err, data) => {
    var arr = await JSON.parse(data);

    var language = "";

    if (req.query.language) {
      language = req.query.language;
      data = arr.filter(
        (x) => x.Language.toLowerCase() == language.toLowerCase()
      );
    } else if (req.query.genre) {
      data = arr.filter((x) =>
        x.Genre.toLowerCase().includes(req.query.genre.toLowerCase())
      );
    }

    if (data) res.send(data);
    if (err) res.send(err);
  });
})


module.exports = router;

// switch (year) {
//     case "2017": case "2016": case "2015":
//   var Movies  = path.join(__dirname, "../data/movies_2017..2015.json");
//     break;

//   case "2018":
// var Movies  = path.join(__dirname, "../data/movies_2018.json");
//   break;
//   case "2019":
// var Movies  = path.join(__dirname, "../data/movies_2019.json");
//   break;
//   case "2020":
// var Movies  = path.join(__dirname, "../data/movies_2020.json");
//   break;
//   case "2021":
// var Movies = path.join(__dirname, "../data/movies_2021.json");
//   break;
// }
