import request from 'supertest';
import app from '../app';

describe('GET/ get all students', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('It should return 403 if student is not logged in', async () => {
    const res = await request(app).get('/api/v1/students/');
    if (res.body.message === 'authorization denied, Login first') {
      expect(res.status).toBe(403);
    }
  });

  test('It should return 404 if no data is available', async () => {
    const res = await request(app).get('/api/v1/students/');
    if (res.body.length === 0) {
      expect(res.status).toBe(404);
    }
  });

  test('It should return 200 if data successfully fetched', async () => {
    const res = await request(app).get('/api/v1/students/');
    if (res.body.message === 'successfully fetched all students') {
      expect(res.status).toBe(200);
    }
  });
});
