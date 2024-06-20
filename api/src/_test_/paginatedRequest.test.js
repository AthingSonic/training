const request = require("supertest");
const app = require("../../app.js");

describe("GET/ get paginated request", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("It should return 400 if invalid page or page size", async () => {
    const res = await request(app)
      .get("/api/v1/students/getStudentsPagination")
      .send({
        page: "one",
        pageSize: -2,
      });
    // console.log(res.body);
    expect(res.statusCode).toBe(400);
  });

  test("It should return 200 if succesfully fetched data", async () => {
    const res = await request(app)
      .get("/api/v1/students/getStudentsPagination")
      .send({
        page: 1,
        pageSize: 5,
      });
    // console.log(res.body);
    expect(res.statusCode).toBe(200);
  });
});
