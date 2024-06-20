const request = require("supertest");
const app = require("../../app.js");

describe("POST / login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("It should return 400 if required fields are missing", async () => {
    const res = await request(app).post("/api/v1/students/login").send({});

    expect(res.statusCode).toBe(400);
  });

  test("It should return 401 if wrong email", async () => {
    const res = await request(app).post("/api/v1/students/login").send({
      email: "wung@gmail.com",
      password: "wrongpassword",
    });

    expect(res.statusCode).toBe(401);
  });

  test("It should return 401 if wrong password", async () => {
    const res = await request(app).post("/api/v1/students/login").send({
      email: "wrongemail@gmail.com",
      password: "athing@123",
    });

    expect(res.statusCode).toBe(401);
  });

  test("it should return 200 on succesfull login", async () => {
    const res = await request(app).post("/api/v1/students/login").send({
      email: "wung@gmail.com",
      password: "athing@123",
    });
    expect(res.statusCode).toBe(200);
  });
});
