var express = require("express");
var router = express.Router();

const roles = [
    { id: 1, name: "Tutor" },
    { id: 2, name: "Student" },
    { id: 3, name: "Administrator" }    
];

router.get('/', function(req, res, next){
    res.send(roles);
});

module.exports = router;