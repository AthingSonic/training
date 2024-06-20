const request = require("supertest");
const app = require("../../app.js");

describe("GET/ get all students", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("it should get 400 if invalid id", async () => {
    let id = "one"; //intentionally givin an invalid id
    const res = await request(app).delete(
      `/api/v1/students/deleteStudentById/${id}`
    );

    // if (res.statusCode === 400) {
    expect(res.statusCode).toBe(400);
    // }
  });

  test("it should get 404 if no student found id", async () => {
    let id = 999999999; //give an id which mnight not exist
    const res = await request(app).delete(
      `/api/v1/students/deleteStudentById/${id}`
    );
    // if (res.statusCode === 404) {
    expect(res.statusCode).toBe(404);
    // }
  });

  test("it should get 204 if Succesfully deleted student with id", async () => {
    let id = 13; //give an id which exist
    const res = await request(app).delete(
      `/api/v1/students/deleteStudentById/${id}`
    );
    // if (res.statusCode === 204) {
    expect(res.statusCode).toBe(204);
    // }
  });
});
