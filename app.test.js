const request = require("supertest");
const app = require("./app")
const baseUrl = 'https://reqres.in';


// Test: Create User
describe('Create User', () => {
    test('Should Create User', async() => {
        const response = await request(baseUrl)
            .post('/api/users')
            .send({
                "name": "morpheus",
                "job": "leader"
            });
        expect(response.statusCode).toBe(201)
    })

})

// Test: Get User
describe('Get Single User by ID', () => {
    test('Should get single user', async() => {

        // User Id to Get
        const userId = 12

        const response = await request(baseUrl)
            .get(`/api/users/${userId}`);
        expect(response.statusCode).toBe(200);
    });
})

// Test: Update user
describe('Update user by Patch/Put methods', () => {

    // User Id to Update
    const userId = 12

    test('Should get user id', async() => {
        const response = await request(baseUrl)
            .get(`/api/users/${userId}`)
        expect(response.statusCode).toBe(200);
    });

    test('Should update user', async() => {
        const response = await request(baseUrl)
            .put(`/api/users/${userId}`)
        expect(response.statusCode).toBe(200)
    })

})

// Test: Delete User
describe('Delete User', () => {
    test('Should Delete User', async() => {

        // User Id to Delete
        const userId = 12

        const response = await request(baseUrl)
            .delete('/api/users')
            .send({
                "id": userId
            });
        expect(response.statusCode).toBe(204)
    })
})