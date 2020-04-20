var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.

// Get all the burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// Add a new burger
router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data) {

    res.json({ id: data.insertId });
  });
});

// Update burger to devoured
router.put("/api/burgers/:id", function(req, res){
  let condition = "id = " + req.params.id;

  let objColVals = {devoured : req.body.devoured};

  burger.updateOne(objColVals, condition, function(data){

      if(data.changedRows === 0){
          res.status(404).end();
      }
      res.status(200).end();
  });
});

// Trash burger
router.delete("/api/burgers/:id", function(req, res){
  let condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(data){

      if(data.affectedRows === 0){
          res.status(404).end();
      }
      res.status(200).end();
  });
});

module.exports = router;