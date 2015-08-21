var express = require('express');
var router = express.Router();

//need to connect to utility.js to access functions
var utility = require('../utility.js');



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shuffle & Chunk' });
});

//post route to receive form submit back
router.post('/submit', function(req, res, next) {
  console.log(req.body);
  //how many people from the form
  //will be a string, seperated by a comma, need to make into an array of people input 'jim, bob' >> output ['jim','bob']
  var people = req.body.totalPeople.replace(/,/g, '').split(' ');
  console.log(people);
  ///the number from the form
  var number = req.body.number;
  console.log(number);

  //results of the shufflechunk logic
  var results = utility.shuffleChunk(people, number);

  console.log(results);
  // //render on index
  res.render('results', {
    title: 'Shuffle & Chunk',
    results: results});
});

module.exports = router;
