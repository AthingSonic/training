// const request = require("supertest");
// const app = require("../../app.js");
const pool = require("../../db.js");
const { getStudents } = require("../student/controller.js");
const query = require("../student/queries.js");

// jest.mock("../../utils/jwtGenerator.js"); //jwt generator?
jest.mock("../../db.js"); //pool

describe("getStudents Controller", () => {
  let req, res;

  beforeEach(() => {
    req = {}; // No specific properties needed for this test
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 and the students data when data is available", async () => {
    const mockData = {
      rowCount: 2,
      rows: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
      ],
    };

    pool.query.mockResolvedValue(mockData);

    await getStudents(req, res);

    expect(pool.query).toHaveBeenCalledWith(query.getStudents);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData.rows);
  });

  it("should return 404 when no data is available", async () => {
    const mockData = {
      rowCount: 0,
      rows: [],
    };

    pool.query.mockResolvedValue(mockData);

    await getStudents(req, res);

    expect(pool.query).toHaveBeenCalledWith(query.getStudents);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "No data available" });
  });

  it("should return 500 when there is a server error", async () => {
    const mockError = new Error("Database error");

    pool.query.mockRejectedValue(mockError);

    await getStudents(req, res);

    expect(pool.query).toHaveBeenCalledWith(query.getStudents);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: mockError.message });
  });
});
