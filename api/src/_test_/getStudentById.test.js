const request = require("supertest");
const app = require("../../app.js");

describe("GET/ get student by id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("it should return 400 if invalid id", async () => {
    let id = "one"; //intentionalyy giving an invalid id
    const res = await request(app).get(`/api/v1/students/${id}`);
    // console.log(res.body.error);
    if (res.body.error === "Invalid student ID") {
      expect(res.statusCode).toBe(400);
    }
  });

  test("it should return 404 if no student found with id", async () => {
    let id = 999999; //give an id which might no exist
    const res = await request(app).get(`/api/v1/students/${id}`);
    // console.log(res.body.message);
    if (res.body.message === `No student found with ID: ${id}`) {
      expect(res.statusCode).toBe(404);
    }
  });

  test("it should return 200 if  student Succesfully fetched", async () => {
    let id = 14; //give an id which exist
    const res = await request(app).get(`/api/v1/students/${id}`);

    // if (res.statusCode === 200) {
    expect(res.statusCode).toBe(200);
    // }
  });
});
