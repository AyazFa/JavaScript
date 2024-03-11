var express = require('express');
var router = express.Router();

const users = [
  { id: 1, name: 'Bob'},
  { id: 2, name: 'Tom'},
  { id: 3, name: 'Jack'}    
];

router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
