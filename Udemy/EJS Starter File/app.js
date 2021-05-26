//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.get("/", function(req, res){
  const today = new Date();
  const currentDay = today.getDay();
  const day = "";

  if (currentDay() === 6 || currentDay() === 0){
    day = "weekend"
  } else {
    day = "weekday"
  }
});
  res.render({
    day: day
  })
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
