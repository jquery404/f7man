const express = require("express");
const app = express();
const path = require('path')
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    var cat = {
        "record": [
          {
            "id": 1,
            "title": "Beef",
            "thumb": "https://main.dqbqn5szb1e5i.amplifyapp.com/apps/foodie/img/beef/beef1.jpg"
          },
          {
            "id": 2,
            "title": "lamb",
            "thumb": "https://main.dqbqn5szb1e5i.amplifyapp.com/apps/foodie/img/lamb/lamb1.jpg"
          },
          {
            "id": 3,
            "title": "vegetable",
            "thumb": "https://main.dqbqn5szb1e5i.amplifyapp.com/apps/foodie/img/vegetable/veg1.jpg"
          },
          {
            "id": 4,
            "title": "chicken",
            "thumb": "https://main.dqbqn5szb1e5i.amplifyapp.com/apps/foodie/img/chicken/chic1.jpg"
          },
          {
            "id": 5,
            "title": "fish",
            "thumb": "https://main.dqbqn5szb1e5i.amplifyapp.com/apps/foodie/img/fish/fish1.jpg"
          }
        ]
    };

    res.status(200).json(cat);
});

// set port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});