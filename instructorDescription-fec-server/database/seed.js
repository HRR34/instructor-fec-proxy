var faker = require('faker');
const db = require('./index.js');
const Instructors = require('./dbInstructor.js');

for (let i = 1; i <= 100; i++) {
  let instructorList = {};
  instructorList.imageUrl = faker.image.avatar();
  instructorList.name = faker.name.findName();
  instructorList.headline = faker.lorem.sentence();
  instructorList.body = faker.lorem.paragraph();
  instructorList.reviewsIcon = "https://image.flaticon.com/icons/svg/25/25355.svg",
  instructorList.reviews = faker.random.number();
  instructorList.ratingIcon = "https://www.iconsdb.com/icons/preview/black/star-xxl.png",
  instructorList.rating = Math.floor(Math.random() * 5) + 1;
  instructorList.studentsIcon = "http://chittagongit.com//images/person-icon-png/person-icon-png-28.jpg",
  instructorList.numOfStudents = faker.random.number();
  instructorList.courseIcon = "http://semanaialumni.udd.cl/files/2017/01/play-icon-300x300.png"
  instructorList.numOfCourses = Math.floor(Math.random() * 30) + 1;

  Instructors.create(instructorList, (err, results) => {
    if (err) {
      console.log('Error seeding database')
    }
  })

};
