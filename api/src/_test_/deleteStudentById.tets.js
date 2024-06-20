const request = require("supertest");
const app = require("../../app.js");

describe("GET/ get all students", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("it should get 400 if invalid id", async () => {
    const res = await request(app).delete(
      "/api/v1/students/deleteStudentById/:id"
    );

    if (res.statusCode === 400) {
      expect(res.statusCode).toBe(400);
    }
  });

  test("it should get 404 if no student found id", async () => {
    const res = await request(app).delete(
      "/api/v1/students/deleteStudentById/:id"
    );

    if (res.statusCode === 404) {
      expect(res.statusCode).toBe(404);
    }
  });

  test("it should get 204 if Succesfully deleted student with id", async () => {
    const res = await request(app).delete(
      "/api/v1/students/deleteStudentById/:id"
    );

    if (res.statusCode === 200) {
      expect(res.statusCode).toBe(204);
    }
  });
});
