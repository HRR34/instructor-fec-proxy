const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const instructorSchema = new mongoose.Schema({
  courseId: Number,
  imageUrl: String,
  name: String,
  headline: String,
  body: String,
  reviewsIcon: String,
  reviews: Number,
  rating: Number,
  ratingIcon: String,
  numOfStudents: Number,
  studentsIcon: String,
  numOfCourses: Number,
  courseIcon: String
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;