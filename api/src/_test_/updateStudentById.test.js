const request = require("supertest");
const app = require("../../app.js");

describe("Patch/ update student by id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("it should return 400 if no fields are provided for update", async () => {
    let id = 9; //give an id which exist
    const res = await request(app)
      .patch(`/api/v1/students/updateStudent/${id}`)
      .send({});
    // console.log(res.body);

    // if (res.statusCode === 400) {
    expect(res.statusCode).toBe(400);
    // }
  });

  test("it should return 404 if no student found with id", async () => {
    let id = 99999999; //give an id which will not exist
    const res = await request(app)
      .patch(`/api/v1/students/updateStudent/${id}`)
      .send({
        name: "athing",
        email: "athing@gmail.com",
        age: 25,
        dob: "1999-02-17",
        password: "athing@123",
      });
    // console.log(res.body);

    // if (res.statusCode === 404) {
    expect(res.statusCode).toBe(404);
    // }
  });

  test("it should return 200 if Succesfully updated student with id", async () => {
    let id = 13; //give an id which exist
    const res = await request(app)
      .patch(`/api/v1/students/updateStudent/${id}`)
      .send({
        name: "test",
        age: 26,
        dob: "1998-02-17",
      });
    console.log(res.body);

    // if (res.statusCode === 200) {
    expect(res.statusCode).toBe(200);
    // }
  });
});
