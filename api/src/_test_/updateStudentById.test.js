const request = require("supertest");
const app = require("../../app.js");

describe("Patch/ update student by id", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should return 403 if student is not logged in', async ()=>{
    const res = await request(app).get('/api/v1/students/')

    // console.log(res.body);
    if(res.body.message === 'authorization denied, Login first'){
      expect(res.statusCode).toBe(403)
    }
    
  })

  test("it should return 400 if no fields are provided for update", async () => {
    let id = 9; //give an id which exist
    const res = await request(app)
      .patch(`/api/v1/students/updateStudent/${id}`)
      .send({});
    // console.log(res.body);

    if (res.body.message === 'No fields provided for update') {
    expect(res.statusCode).toBe(400);
    }
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

    if (res.body.message === `No student found with id: ${id}`) {
    expect(res.statusCode).toBe(404);
    }
  });

  test("it should return 200 if Succesfully updated student with id", async () => {
    let id = 11; //give an id which exist
    const res = await request(app)
      .patch(`/api/v1/students/updateStudent/${id}`)
      .send({
        name: "test",
        age: 26,
        dob: "1998-02-17",
      });
    // console.log(res.body);

    if (res.body.message === `Successfully updated student with id: ${id}`) {
    expect(res.statusCode).toBe(200);
    }
  });
});
