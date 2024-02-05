var express = require('express');
var router = express.Router();


//banning session for the user
router.get('/', function(req, res){
  req.session.ban = true;
  res.render("index");
});

//Checking the ban session
router.get('/checkbanSession', function(req,res){
  if (req.session.ban === true){
    res.send("You are banned!")
  }
  else{
    res.send("Not banned")
  }
  
});

//removing the session ban
router.get('/removeSessionBan', function(req,res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("ban removed");
  });
  
})


module.exports = router;
