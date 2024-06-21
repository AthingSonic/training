const request = require('supertest')
const app = require('../../app.js')

describe('DELETE/ delete all students', ()=>{
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('it should return 404 if the table is empty', async ()=>{
        const res = await request(app).delete('/api/v1/students/deleteAllStudents')

        if(res.body.message === 'Empty table, no data to delete'){
            expect(res.statusCode).toBe(404)
        }
    })

    test('it should return 204 if all the students have been deleted from the table', async ()=>{
        const res = await request(app).delete('/api/v1/students/deleteAllStudents')

        if(res.body.message === 'Successfully deleted all students from the table'){
            expect(res.statusCode).toBe(204)
        }
    })
})