import request from 'supertest';
import app from '../app';

describe("POST/ logout student", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('It should return 401 if Token cookie is empty or not set.', async ()=>{
        const res = await request(app).post('/api/v1/students/logout')

        // console.log(res.body);
        if(res.body.message === 'Token cookie is empty or not set.'){
            expect(res.statusCode).toBe(401)
        }
    })

    test('It should return 200 successfully logged out.', async ()=>{
        const res = await request(app).post('/api/v1/students/logout')

        // console.log(res.body);
        if(res.body.message === 'Succesfully logged out.'){
            expect(res.statusCode).toBe(200)
        }
    })
})