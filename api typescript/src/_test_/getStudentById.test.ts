import request from 'supertest';
import app from '../app';

describe("GET/ get student by id", () => {
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
    let id = 11; //give an id which exist
    const res = await request(app).get(`/api/v1/students/${id}`);

    if (res.statusCode === 200) {
    expect(res.statusCode).toBe(200);
    }
  });
});
