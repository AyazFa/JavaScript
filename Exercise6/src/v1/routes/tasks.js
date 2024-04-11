var express = require('express');
var router = express.Router();

const tasks = [
    { id: 1, description: 'Test task', userId: 1 },
    { id: 2, description: 'Technical task', userId: 2 },
    { id: 3, description: 'Issue', userId: 3 }    
  ];

router.get('/', function(req, res, next) {
  res.send(tasks);
});

module.exports = router;