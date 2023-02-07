const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

let record = [
    {
      id: 1,
      title: "Beef",
      thumb: "https://via.placeholder.com/450x250/FFFF00/000000/?text=Beef",
      items: [
        {
          cat_id: 1,
          cat_title: "Beef",
          id: 1,
          title: "Beef Hatkora",
          price: 107.87,
          description: "Sad op it",
          thumb: "https://via.placeholder.com/450x250/FFDDDD/121213/?text=Beef%20Hatkora"
        },
        {
          cat_id: 1,
          cat_title: "Beef",
          id: 2,
          title: "Beef Wellington",
          price: 117.87,
          description: "Sad oop uyiii",
          thumb: "https://via.placeholder.com/450x250/FFEEFF/112113/?text=Beef%20Wellington"
        }
      ], 
    },
    {
      id: 2,
      title: "lamb",
      thumb: "https://via.placeholder.com/450x250/DDEEFF/000000/?text=Lamb",
      items: [
        {
          cat_id: 2,
          cat_title: "lamb",
          id: 1,
          title: "Lamb fries",
          price: 107.87,
          description: "Sad op it",
          thumb: "https://via.placeholder.com/450x250/454345/000000/?text=Lamb%20fries",
        },
        {
          cat_id: 2,
          cat_title: "lamb",
          id: 2,
          title: "Moussaka",
          price: 107.87,
          description: "Sad oop uyiii",
          thumb: "https://via.placeholder.com/450x250/FFEEAA/000000/?text=Moussaka",
        }
      ], 
    },
    {
      id: 3,
      title: "vegetable",
      thumb: "https://via.placeholder.com/450x250/FFFF00/000000/?text=vegetable",
      items: [
        {
          cat_id: 3,
          cat_title: "vegetable",
          id: 1,
          title: "Pasta primavera",
          price: 107.87,
          description: "Sad op it",
          thumb: "https://via.placeholder.com/450x250/FFDDFF/000000/?text=Pasta%20primavera",
        },
        {
          cat_id: 3,
          cat_title: "vegetable",
          id: 2,
          title: "Ratatouille",
          price: 107.87,
          description: "Sad oop uyiii",
          thumb: "https://via.placeholder.com/450x250/564321/000000/?text=Ratatouille",
        }
      ], 
    },
    {
      id: 4,
      title: "chicken",
      thumb: "https://via.placeholder.com/450x250/FF1100/000000/?text=chicken",
      items: [
        {
          cat_id: 4,
          cat_title: "chicken",
          id: 1,
          title: "Ayam bakar",
          price: 107.87,
          description: "Sad op it",
          thumb: "https://via.placeholder.com/450x250/898789/000000/?text=Ayam%20bakar",
        },
        {
          cat_id: 4,
          cat_title: "chicken",
          id: 2,
          title: "Backhendl",
          price: 107.87,
          description: "Sad oop uyiii",
          thumb: "https://via.placeholder.com/450x250/990000/000000/?text=Backhendl",
        }
      ], 
    },
    {
      id: 5,
      title: "fish",
      thumb: "https://via.placeholder.com/450x250/FCCF00/000000/?text=vegetable",
      items: [
        {
          cat_id: 5,
          cat_title: "fish",
          id: 1,
          title: "Herring soup",
          price: 107.87,
          description: "Sad op it",
          thumb: "https://via.placeholder.com/450x250/FFFFAA/000000/?text=Herring%20soup",
        },
        {
          cat_id: 5,
          cat_title: "fish",
          id: 2,
          title: "Fish moolie",
          price: 107.87,
          description: "Sad oop uyiii",
          thumb: "https://via.placeholder.com/450x250/FFFFBB/000000/?text=Fish%20moolie",
        }
      ], 
    }
  ];


app.get('/categories', function(req, res) {
  res.json({record: record, url: req.url});
});

app.get('/categories/:id', function(req, res) {
  let category_id = req.params.id;
  res.json({record: record[category_id].items, url: req.url});
});

app.post('/categories', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/categories/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.put('/categories', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/categories/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.delete('/categories', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/categories/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
