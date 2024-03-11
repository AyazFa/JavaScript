var express = require('express');
var router = express.Router();

const tasks = [
    { id: 1, description: 'Test'},
    { id: 2, description: 'Technical task'},
    { id: 3, description: 'Issue'}    
  ];

router.get('/', function(req, res, next) {
  res.send(tasks);
});

module.exports = router;