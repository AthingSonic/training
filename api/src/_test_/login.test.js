const request = require("supertest");
const { login } = require("../student/controller.js"); // Assuming your login function is in a separate file/module
const pool = require("../../db.js");
const query = require("../student/controller.js");
const app = require("../../app.js");
const jwt = require('jsonwebtoken');



/*************/ 
// Mock pool.query
jest.mock("../../db.js", () => ({
  query: jest.fn(),
}));
jest.mock("../../db.js"); //pool


describe("POST/ login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockStudent = {
    id: 1,
    email: "jake@gmail.com",
    password: "mockhashedpassword", // Mock hashed password    
  };

  it("should return 400 if required fields are missing", async () => {
    const res = await request(app)
      .post("/api/v1/students/login")
      .send({})

      .expect("Content-Type", /json/);
    expect(res.status).toEqual(400);
  });

  it("should return 404 if email does not match", async () => {
    // Mock the behavior of pool.query to return no rows (no student found)
    pool.query.mockResolvedValue({ rows: [] });
    const res = await request(app)
      .post("/api/v1/students/login")
      .send({
        email: "wrongmail@gmail.com",
        password: "test@gmail.com",
      })

      .expect("Content-Type", /json/);
    expect(res.status).toEqual(404);

    expect(res.body).toEqual({ message: "Invalid email or password" });
  });

  it("should return 401 password does not match", async () => {
    // Mock the behavior of pool.query to return the mockStudent
    pool.query.mockResolvedValue({ rows: [mockStudent] });
    const res = await request(app)
      .post("/api/v1/students/login")
      .send({
        email: "jake@gmail.com",
        password: "wrongpassword",
      })

      .expect("Content-Type", /json/);
      
    expect(res.status).toEqual(401);

    expect(res.body).toEqual({ message: "Invalid email or password" });
  });

  it("should return 200 if it successfully logs in the student", async () => {
    
    pool.query.mockResolvedValueOnce({ rows: [mockStudent] }); 
    const res = await request(app)
      .post("/api/v1/students/login")
      .send({
        email: "jake@gmail.com",
        password: "test@gmail.com",
      })
      .expect("Content-Type", /json/)
    // console.log(res.body);
    expect(res.status).toEqual(200);
  });

    it("should handle internal server error", async () => {
      // Mocking an error scenario
      pool.query.mockRejectedValueOnce(new Error("Database error"));

      const res = await request(app)
        .post("/api/v1/students/register")
        .send({
          email: "jake@gmail.com",
            password: "test@gmail.com"
        })
        .expect("Content-Type", /json/)
        .expect(500);

      expect(res.body).toEqual({
        error: "Internal Server Error",
      });
    });
});

/*************/

// jest.mock('pg');
// jest.mock('jsonwebtoken');

// describe('Login Controller', () => {
//     const mockRequest = (body) => ({
//       body,
//     });
  
//     const mockResponse = () => {
//       const res = {};
//       res.status = jest.fn().mockReturnValue(res);
//       res.json = jest.fn().mockReturnValue(res);
//       res.cookie = jest.fn().mockReturnValue(res);
//       return res;
//     };
  
//     beforeEach(() => {
//       jest.clearAllMocks(); // Clear mock calls before each test
//     });
  
//     it('should return 400 if email or password is missing', async () => {
//       const req = mockRequest({});
//       const res = mockResponse();
  
//       await login(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(400);
//       expect(res.json).toHaveBeenCalledWith({
//         message: 'Please fill all the required details',
//         data: {},
//       });
//     });
  
//     it('should return 404 if student does not exist', async () => {
//       const req = mockRequest({
//         email: 'nonexistent@example.com',
//         password: 'password',
//       });
//       const res = mockResponse();
  
//       pool.query.mockResolvedValueOnce({ rows: [] });
  
//       await login(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(404);
//       expect(res.json).toHaveBeenCalledWith({
//         message: 'Invalid email or password',
//       });
//     });
  
//     it('should return 401 if password is invalid', async () => {
//       const req = mockRequest({
//         email: 'existing@example.com',
//         password: 'invalidpassword',
//       });
//       const res = mockResponse();
  
//       const mockStudent = {
//         id: 1,
//         email: 'existing@example.com',
//         password: '$2b$10$mockhashmockhashmockhashmockhashmockhas',
//       };
  
//       pool.query.mockResolvedValueOnce({ rows: [mockStudent] });
//       jwt.verify.mockImplementationOnce(() => ({ id: mockStudent.id }));
  
//       await login(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(401);
//       expect(res.json).toHaveBeenCalledWith({
//         message: 'Invalid email or password',
//       });
//     });
  
//     it('should return 200 and set cookie with JWT token if login is successful', async () => {
//       const req = mockRequest({
//         email: 'existing@example.com',
//         password: 'validpassword',
//       });
//       const res = mockResponse();
  
//       const mockStudent = {
//         id: 1,
//         email: 'existing@example.com',
//         password: '$2b$10$mockhashmockhashmockhashmockhashmockhas',
//       };
  
//       pool.query.mockResolvedValueOnce({ rows: [mockStudent] });
//     //   jwt.verify.mockImplementationOnce(() => ({ id: mockStudent.id }));
//     //   jwt.sign.mockReturnValue('mocked.jwt.token');
  
//       await login(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(200);
//     //   expect(res.cookie).toHaveBeenCalledWith('token', 'mocked.jwt.token', { httpOnly: true });
//     expect(res.cookie).toHaveBeenCalledWith('token', expect.any(String), { httpOnly: true });  
//     expect(res.json).toHaveBeenCalledWith({
//         message: 'Successfully logged in',
//         student: {
//           id: mockStudent.id,
//           email: mockStudent.email,
//         },
//         jwtToken: 'mocked.jwt.token',
//       });
//     });
    
  
//     it('should handle server errors gracefully', async () => {
//       const req = mockRequest({
//         email: 'existing@example.com',
//         password: 'validpassword',
//       });
//       const res = mockResponse();
  
//       pool.query.mockRejectedValueOnce(new Error('Database error'));
  
//       await login(req, res);
  
//       expect(res.status).toHaveBeenCalledWith(500);
//       expect(res.json).toHaveBeenCalledWith({
//         error: 'Internal Server Error',
//       });
//     });
//   });

/*************/


// describe("login function", () => {
//   const req = { body: { email: "test@example.com", password: "password123" } };
//   const res = {
//     status: jest.fn().mockReturnThis(),
//     cookie: jest.fn().mockReturnThis(),
//     json: jest.fn(),
//   };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should log in successfully with valid credentials", async () => {
//     const mockStudent = {
//       id: 1,
//       email: "test@example.com",
//       password: "password123",
//     };

//     // Mock the behavior of pool.query
//     pool.query.mockResolvedValue({ rows: [mockStudent] });

//     // Call the login function
//     await login(req, res);

//     // Assertions
//     expect(pool.query).toHaveBeenCalledTimes(1);
//     expect(pool.query).toHaveBeenCalledWith(query.loginStudent, [
//       req.body.email,
//     ]);
//     expect(res.cookie).toHaveBeenCalledWith("token", expect.any(String), {
//       httpOnly: true,
//     }); // Assuming API generates token
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({
//       message: "Successfully logged in",
//       student: {
//         id: mockStudent.id,
//         email: mockStudent.email,
//       },
//       jwtToken: expect.any(String), // Assuming API returns a token string
//     });
//   });

//   it('should return "Invalid credentials" when email or password is incorrect', async () => {
//     // Mock the behavior of pool.query to return no rows (no student found)
//     pool.query.mockResolvedValue({ rows: [] });

//     // Call the login function
//     await login(req, res);

//     // Assertions
//     expect(pool.query).toHaveBeenCalledTimes(1);
//     expect(pool.query).toHaveBeenCalledWith(query.loginStudent, [
//       req.body.email,
//     ]);
//     expect(res.cookie).not.toHaveBeenCalled(); // No token set in cookies
//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.json).toHaveBeenCalledWith({ message: "Invalid credentials" });
//   });

//   it("should handle internal server error gracefully", async () => {
//     // Mock pool.query to throw an error
//     pool.query.mockRejectedValue(new Error("Database error"));

//     // Call the login function
//     await login(req, res);

//     // Assertions
//     expect(pool.query).toHaveBeenCalledTimes(1);
//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
//   });
// });
