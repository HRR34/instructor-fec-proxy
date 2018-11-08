var chaiHttp = require('chai-http');
var chai = require('chai');
var expect = chai.expect;
var server = require('./index.js');

chai.use(chaiHttp);

describe('API Routes', () => {

  test('GET / returns a success status code', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status('200');
      })
  })

  test('GET / returns html data', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.be.html;
      })
  })

  test('GET /instructors returns a success status code', () => {
    chai.request(server)
      .get('/instructors')
      .end((err, res) => {
        expect(res).to.have.status('200');
      })
  })

  test('GET /instructors returns json data', () => {
    chai.request(server)
      .get('/ins')
      .end((err, res) => {
        expect(res).to.be.json;
      })
    })
  })