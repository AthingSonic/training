const request = require('supertest');
const app = require('../../app.js');
const jwtGenerator = require('../../utils/jwtGenerator.js'); 
const pool = require('../../db.js'); 
// const bcrypt = require('bcryptjs');

// const query = require('../../src/student/queries.js'); 

// Mock functions or test database setup (if needed)
// jest.mock('bcryptjs');
jest.mock('../../utils/jwtGenerator.js'); //jwt generator
jest.mock('../../db.js'); //pool
// jest.mock('../../src/student/queries.js'); //queries

describe('POST /register', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 if required fields are missing', async () => {
    const res = await request(app)
      .post('/api/v1/students/register')
      .send({
        name: 'John Doe',
        age: 30,
        dob: '1994-06-19',
        password: 'testpassword',
      })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(res.body).toEqual({
      message: 'Please fill all the required details',
      data: {
        name: 'John Doe',
        age: 30,
        dob: '1994-06-19',
        password: 'testpassword',
      },
    });
  });

  it('should return 400 if email format is invalid', async () => {
    const res = await request(app)
      .post('/api/v1/students/register')
      .send({
        name: 'John Doe',
        email: 'invalidemail',
        age: 30,
        dob: '1994-06-19',
        password: 'testpassword',
      })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(res.body).toEqual({
      message: 'Invalid email format',
    });
  });

  it('should return 400 if password length is less than 6 characters', async () => {
    const res = await request(app)
      .post('/api/v1/students/register')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30,
        dob: '1994-06-19',
        password: 'short',
      })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(res.body).toEqual({
      message: 'Password should be at least 6 characters long',
    });
  });

  it('should return 400 if email already exists', async () => {
    // Mocking the query result to simulate existing email
    pool.query.mockResolvedValueOnce({ rows: [{ /* mock existing email data */ }] });

    const res = await request(app)
      .post('/api/v1/students/register')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30,
        dob: '1994-06-19',
        password: 'testpassword',
      })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(res.body).toEqual({
      message: 'Email: john.doe@example.com already exists',
    });
  });

  it('should successfully register a new student', async () => {
    // Mock bcrypt and JWT token generation
    // const mockHash = 'hashedpassword';
    // bcrypt.genSalt.mockResolvedValue('salt');
    // bcrypt.hash.mockResolvedValue(mockHash);
    jwtGenerator.mockReturnValue('mockjwttoken');

    // Mock successful database queries
    pool.query.mockResolvedValueOnce({ rows: [] }); // Simulate email not existing
    // pool.query.mockResolvedValueOnce({ rows: [{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }] }); // Simulate new student added

    const res = await request(app)
      .post('/api/v1/students/register')
      .send({
        name: 'John Doe',
        email: 'john.doe@example123456.com',
        age: 30,
        dob: '1994-06-19',
        password: 'testpassword',
      })
      // .expect('Content-Type', /json/);

    expect(res.status).toEqual(201);

    // expect(res.body).toEqual({
    //   message: 'Successfully added student',
    //   newStudent: {
    //     id: 1,
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //   },
    //   jwtToken: 'mockjwttoken',
    // });
  });

  it('should handle server errors', async () => {
    // Mocking an error scenario
    pool.query.mockRejectedValueOnce(new Error('Database error'));

    const res = await request(app)
      .post('/api/v1/students/register')
      .send({
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30,
        dob: '1994-06-19',
        password: 'testpassword',
      })
      .expect('Content-Type', /json/)
      .expect(500);

    expect(res.body).toEqual({
      error: 'Database error',
    });
  });
});
