var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    "Users": [
      {
        name: "Dylan Perry",
        address: "109 Cicada Place",
        city: "Apex",
        state: "NC",
        zipcode: "27539"
      },
      {
        name: "Arie Tipton",
        address: "108 Cicada Place",
        city: "Apex",
        state: "NC",
        zipcode: "27539"
      }
    ]
  });
});

module.exports = router;
