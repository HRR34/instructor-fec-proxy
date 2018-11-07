const express = require('express');
const bodyParser = require('body-parser');

const Instructors = require('../database/dbInstructor.js');

const app = express();
const port = 3332;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'))

app.get("/instructors", (req, res) => {
  Instructors.count().exec(function (err, count) {
  var random = Math.floor(Math.random() * count)

  Instructors.findOne()
  .skip(random)
  .exec(function (err, result) {
       if (err) {
      console.log('Error')
    }
    res.status(200).send(JSON.stringify(result))
    })
  })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});