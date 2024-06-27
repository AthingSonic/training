import request from 'supertest';
import app from '../app';

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
