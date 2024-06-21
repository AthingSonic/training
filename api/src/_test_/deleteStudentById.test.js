const request = require("supertest");
const app = require("../../app.js");

describe("DELETE/ delete student by id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("it should get 400 if invalid id", async () => {
    let id = "one"; //intentionally givin an invalid id
    const res = await request(app).delete(
      `/api/v1/students/deleteStudentById/${id}`
    );

    if (res.body.message === 'Invalid student ID') {
    expect(res.statusCode).toBe(400);
    }
  });

  test("it should get 404 if no student found id", async () => {
    let id = 999999999; //give an id which mnight not exist
    const res = await request(app).delete(
      `/api/v1/students/deleteStudentById/${id}`
    );
    if (res.body.message === 'No student found with id') {
      expect(res.statusCode).toBe(404);
    }
  });

  test("it should get 204 if Succesfully deleted student with id", async () => {
    let id = 11; //give an id which exist
    const res = await request(app).delete(
      `/api/v1/students/deleteStudentById/${id}`
    );
    if (res.body.message === 'Successfully deleted student') {
    expect(res.statusCode).toBe(204);
    }
  });
});
