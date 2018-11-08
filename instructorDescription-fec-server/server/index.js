const express = require('express');
const bodyParser = require('body-parser');

const Instructors = require('../database/dbInstructor.js');

const app = express();
const port = 3332;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'))

app.get("/Instructors/:courseId", (req, res) => {
  Instructors.find({courseId: req.params.courseId}, (err, result) => {
    if (err) {
      console.log('Error')
    }
    res.status(200).send(JSON.stringify(result))
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});