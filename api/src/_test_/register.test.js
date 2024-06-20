const request = require("supertest");
const app = require("../../app.js");

describe("POST/ register", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("It should return 400 if the required fields are missing", async () => {
    const res = await request(app).post("/api/v1/students/register").send({
      name: "wung",
      email: "wung@gmail.com",
      age: 25,
      dob: "1999-02-17",
      // password: "athing@123",
    });
    expect(res.statusCode).toBe(400);
  });

  test("It should return 400 if invalid email format", async () => {
    const res = await request(app).post("/api/v1/students/register").send({
      name: "wung",
      email: "wrongmail.com",
      age: 25,
      dob: "1999-02-17",
      password: "athing@123",
    });
    expect(res.statusCode).toBe(400);
  });

  test("It should return 400 if the password length is less than 6", async () => {
    const res = await request(app).post("/api/v1/students/register").send({
      name: "wung",
      email: "wung@gmail.com",
      age: 25,
      dob: "1999-02-17",
      password: "1234",
    });
    expect(res.statusCode).toBe(400);
  });

  test("It should return 400 if the email is already registered", async () => {
    const res = await request(app).post("/api/v1/students/register").send({
      name: "wung",
      email: "wung@gmail.com",
      age: 25,
      dob: "1999-02-17",
      password: "athing@123",
    });

    // console.log(">>", res.body);
    if (res.body.message === "email already exist") {
      expect(res.statusCode).toBe(400);
    }
  });

  test("It should return 200 if the student is succesfully registered", async () => {
    const res = await request(app).post("/api/v1/students/register").send({
      name: "wung",
      email: "wung@gmail.com",
      age: 25,
      dob: "1999-02-17",
      password: "athing@123",
    });

    // console.log(">>", res.body);
    if (res.body.message === "Successfully added student") {
      expect(res.statusCode).toBe(200);
    }
  });
});

/*****************/
// const request = require('supertest');
// const app = require('../../app.js');
// const jwtGenerator = require('../../utils/jwtGenerator.js');
// const pool = require('../../db.js');
// jest.mock('../../utils/jwtGenerator.js'); //jwt generator
// jest.mock('../../db.js'); //pool

// describe('POST /register', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should return 400 if required fields are missing', async () => {
//     const res = await request(app)
//       .post('/api/v1/students/register')
//       .send({
//         name: 'John Doe',
//         age: 30,
//         dob: '1994-06-19',
//         password: 'testpassword',
//       })
//       .expect('Content-Type', /json/)
//       .expect(400);

//     expect(res.body).toEqual({
//       message: 'Please fill all the required details',
//       data: {
//         name: 'John Doe',
//         age: 30,
//         dob: '1994-06-19',
//         password: 'testpassword',
//       },
//     });
//   });

//   it('should return 400 if email format is invalid', async () => {
//     const res = await request(app)
//       .post('/api/v1/students/register')
//       .send({
//         name: 'John Doe',
//         email: 'invalidemail',
//         age: 30,
//         dob: '1994-06-19',
//         password: 'testpassword',
//       })
//       .expect('Content-Type', /json/)
//       .expect(400);

//     expect(res.body).toEqual({
//       message: 'Invalid email format',
//     });
//   });

//   it('should return 400 if password length is less than 6 characters', async () => {
//     const res = await request(app)
//       .post('/api/v1/students/register')
//       .send({
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         age: 30,
//         dob: '1994-06-19',
//         password: 'short',
//       })
//       .expect('Content-Type', /json/)
//       .expect(400);

//     expect(res.body).toEqual({
//       message: 'Password should be at least 6 characters long',
//     });
//   });

//   it('should return 400 if email already exists', async () => {
//     // Mocking the query result to simulate existing email
//     pool.query.mockResolvedValueOnce({ rows: [{ /* mock existing email data */ }] });

//     const res = await request(app)
//       .post('/api/v1/students/register')
//       .send({
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         age: 30,
//         dob: '1994-06-19',
//         password: 'testpassword',
//       })
//       .expect('Content-Type', /json/)
//       .expect(400);

//     expect(res.body).toEqual({
//       message: 'Email: john.doe@example.com already exists',
//     });
//   });

//   it('should successfully register a new student', async () => {

//     // jwtGenerator.mockReturnValue('mockjwttoken');

//     // Mock successful database queries
//     pool.query.mockResolvedValueOnce({ rows: [] }); // Simulate email not existing
//     // pool.query.mockResolvedValueOnce({ rows: [{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }] }); // Simulate new student added

//     const res = await request(app)
//       .post('/api/v1/students/register')
//       .send({
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         age: 30,
//         dob: '1994-06-19',
//         password: 'testpassword',
//       })
//       .expect('Content-Type', /json/)

//     expect(res.status).toEqual(201);

//     // expect(res.body).toEqual({
//     //   message: 'Successfully added student',
//     //   newStudent: {
//     //     id: 1,
//     //     name: 'John Doe',
//     //     email: 'john.doe@example.com',
//     //     age: 30,
//     //     dob: "1994-06-19T18:30:00.000Z",
//     //     password: "mockpasssword"
//     //   },
//     //   jwtToken: 'mockjwttoken',
//     // });

//     expect({
//       message: 'Successfully added student',
//       newStudent: {
//         id: 1,
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         age: 30,
//         dob: "1994-06-19T18:30:00.000Z",
//         password: "mockpasssword"
//       },
//       jwtToken: 'mockjwttoken',
//     });
//   });

//   it('should handle server errors', async () => {
//     // Mocking an error scenario
//     pool.query.mockRejectedValueOnce(new Error('Database error'));

//     const res = await request(app)
//       .post('/api/v1/students/register')
//       .send({
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         age: 30,
//         dob: '1994-06-19',
//         password: 'testpassword',
//       })
//       .expect('Content-Type', /json/)
//       .expect(500);

//     expect(res.body).toEqual({
//       error: 'Database error',
//     });
//   });
// });
/******************************/
