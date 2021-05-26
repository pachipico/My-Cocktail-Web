const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const { result } = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const articleSchema = mongoose.Schema({
  title: String,
  content: String
})

const Article = mongoose.model("Article", articleSchema);

/////
///////////////////////////////////Requensts Targetting all Arricles/////////////////////
app.route("/articles")

.get((req, res) => {
  Article.find({}, (err, foundArticles) => {
    if(!err){
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  })
})

.post((req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  })

  newArticle.save(() => {
    if(!err){
      res.send("Successfuly added a new article.");
    } else {
      res.send(err);
    }
  });
})

.delete((req, res) => {
  Article.deleteMany({}, err => {
    if(!err){
      res.send("Successfuly deleted all articles.");
    } else {
      res.send(err);
    }
  })
});

////////////////////////////////////Request Targeting A Specific Article////////////////////////

app.route("/articles/:articleTitle")

.get((req, res) => {
  const something = _.kebabCase(req.params.articleTitle);
  Article.findOne({title: req.params.articleTitle}, (err,foundOne) => {
    if (foundOne) {
      res.send(foundOne);
    } else {
      res.send("No Match.")
    }
  })
})

.put((req, res) => {
  Article.replaceOne(
    {title: req.params.articleTitle},
    {title: req.body.title,content: req.body.content},
    {overwrite: true},
    err => {
      if(!err){
        res.send("Update succeed.");
      } else {
        res.send(err);
      }
    });
})

.patch((req, res) => {

  Article.updateOne(
    {title: req.params.articleTitle},
    {$set: req.body},
    (err, result) => {
      if(!err){
        res.send("Updated succeed");
      } else {
        res.send(err);
      }
    }
  )
})

.delete((req, res) => {
  Article.deleteOne(
    {title: req.params.articleTitle},
    err => {
      if(!err){
        res.send("Successfuly deleted.");
      } else {
        res.send(err);
      }
    }
    )
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
})