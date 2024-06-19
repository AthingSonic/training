const request = require('supertest');
const app = require('../../app.js');
const pool = require('../../db.js'); 
jest.mock('../../utils/jwtGenerator.js'); //jwt generator
jest.mock('../../db.js'); //pool

describe('GET /get all student data', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 403 if user is not logged in', async () => {
    const res = await request(app)
      .get('/api/v1/students/')
      .expect('Content-Type', /json/)

      expect(res.status).toEqual(403)
      expect({
        "message": "authorization denied, Login first"
      })
  });


  it('should return 404 no user data is found', async () => {
    const res = await request(app)
      .get('/api/v1/students/')
      .expect('Content-Type', /json/)

      expect(res.status).toEqual(404)
      expect({
        message: "No data available",
      })
  });

  it('should return 200 if operation is successfull', async () => {
    const res = await request(app)
      .get('/api/v1/students/')
      .expect('Content-Type', /json/)

      expect(res.status).toEqual(200)
      expect(
        [
          {
              "id": 1,
              "name": "wung",
              "email": "wung@gmail.com",
              "age": 25,
              "dob": "1999-02-16T18:30:00.000Z",
              "password": "$2b$10$/QJOotRdytud.5P/TRSZwOYUMFjJzKaaLwX/1We/CARExmQI0hXvu"
          },
          {
              "id": 2,
              "name": "athing",
              "email": "athing@gmail.com",
              "age": 25,
              "dob": "1999-02-16T18:30:00.000Z",
              "password": "$2b$10$pKRRnz4f8.7KCQ1jkxDoAOgCbDxSVRtTopF65nrkBkPpzV6x6sp9G"
          }
        ]
      )
  });

});
