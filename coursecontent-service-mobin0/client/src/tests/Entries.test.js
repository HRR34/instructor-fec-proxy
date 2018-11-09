import React from 'react';
import Entries from "./../components/Entries.jsx";
import renderer from "react-test-renderer"

// let testCourseData = {
//   current_price: 12.99,
//   price: 199.99,
//   discount: 0.94,
//   course_len: 34.5,
//   num_of_articles: 142,
//   dwl_resources_count: 73,
//   discountCountdown: '3 days',
//   isOnDiscount: true
// };

// let correctText = {
//   current_price: '$12.99',
//   price: '$199.99',
//   discount: '94% Off',
//   course_len: '34.5 hours',
//   num_of_articles: '142 articles',
//   dwl_resources_count: '73 downloadable resources',
// };

// describe('Course CTA Card', () => {
//   test('Renders to the screen', () => {
//     expect(true).toBeTruthy()
//   })
// })


describe('My work', () => {
  test('works', () => {
    expect(2).toEqual(2)
  })
})

let entry = {"name":"Talk by Marlen Daniel","duration":196,"entryNumber":1}
describe('I am a KING', () => {
  test('works', () => {
    renderer.create(<Entries entry = {entry}/>)

  })
})


// describe('My work', () => {
//   test('works', () => {
//     const r = renderer.create()
//   })
// })