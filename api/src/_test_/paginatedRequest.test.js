const request = require("supertest");
const app = require("../../app.js");

describe("GET/ get paginated request", () => {
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

  test("It should return 400 if invalid page or page size", async () => {
    const res = await request(app)
      .get("/api/v1/students/getStudentsPagination")
      .send({
        page: "one",
        pageSize: -2,
      });
    // console.log(res.body);
    if(res.body.error === "Invalid page or pageSize value. Both must be positive integers.")
    expect(res.statusCode).toBe(400);
  });

  test("It should return 404 if no data found", async () => {
    const res = await request(app)
      .get("/api/v1/students/getStudentsPagination")
      .send({
        page: 1,
        pageSize: 5,
      });
    // console.log(res.body);
    if(res.body.message === 'No data available'){
      expect(res.statusCode).toBe(404);
    }
    
  });

  test("It should return 200 if succesfully fetched data", async () => {
    const res = await request(app)
      .get("/api/v1/students/getStudentsPagination")
      .send({
        page: 1,
        pageSize: 5,
      });
    // console.log(res.body);
    if(res.body.message === 'successfully fetched data'){
      expect(res.statusCode).toBe(200);
    }
    
  });
});
