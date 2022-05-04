const request = require("supertest");
const express = require("express");
const shell = require('shelljs');
const {
    expect,
    describe,
    test,
    beforeAll,
    afterAll,
} = require('@jest/globals');

/* const app = require('../app.js');
app.use(bodyParser.json())
 */
describe('API Testing routes', () => {
    beforeAll(() => {
/*         shell.exec('npx sequelize-cli db:drop');
 */        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
        shell.exec('npx sequelize-cli db:seed:all');
      });
    test('getAll test with a sucesfull case', async () => {
            const res = await request('localhost:3000')
            .get('/')
            .send({ })
            expect(res.statusCode).toBe(200);
    });
    test('getbyId test with a sucesfull case', async () => {
        const res = await request('localhost:3000')
        .get(`/${1}`)
        .send({ })
        expect(res.statusCode).toBe(200);
    });
    test('getbyId test with a bad case', async () => {
        const res = await request('localhost:3000')
        .get(`/${0}`)
        .send({ })
        expect(res.statusCode).toBe(500);
    });
    test('post test with a sucesfull case', async () => {
        const res = await request('localhost:3000')
        .post('/')
        .send({
                "name": "JohnnyTecnology",
                "companyId": "AA969895959aa6a0a3a46074a9a5b1b4b29e6b",
                "ownerId": "969895959aa6a0a3a46074a9a5b1b4b29e6b",
                "statusId": true,
                "config": "({position: 'bottom-right',position_mobile: 'center-left',button_text: 'Fale com  Johnny'})"
        })
        .set('Accept', 'application/json')
        expect(res.status).toBe(201)
    });
    test('post test with a bad case', async () => {
        const res = await request('localhost:3000')
        .post('/')
        .type('form')
        .send({ })
        .set('Accept', 'application/json')
        expect(res.statusCode).toBe(400)
    });
    test('put test with a sucesfull case', async () => {
        const res = await request('localhost:3000')
        .put(`/${1}`)
        .send({
                "name": "HeaderCCompany",
                "companyId": "969895959aa6a0a3a46074a9a5b1b4b29e6b",
                "ownerId": "969895959aa6a0a3a46074a9a5b1b4b29e6b",
                "statusId": true,
                "config": "({position: 'bottom-right',position_mobile: 'center-left',button_text: 'Fale com  Johnny'})"
        })
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
    });
    test('put test with a bad case', async () => {
        const res = await request('localhost:3000')
        .put(`/${0}`)
        .type('form')
        .send({ })
        .set('Accept', 'application/json')
        expect(res.statusCode).toBe(400)
    });
    test('delete test with a sucesfull case', async () => {
        const res = await request('localhost:3000')
        .put(`/${1}`)
        .send({
                "name": "JohnnyTecnology",
                "companyId": "969895959aa6a0a3a46074a9a5b1b4b29e6b",
                "ownerId": "969895959aa6a0a3a46074a9a5b1b4b29e6b",
                "statusId": true,
                "config": "({position: 'bottom-right',position_mobile: 'center-left',button_text: 'Fale com  Johnny'})"
        })
        .set('Accept', 'application/json')
        expect(res.status).toBe(200)
    });
    test('delete test with a bad case', async () => {
        const res = await request('localhost:3000')
        .put(`/${0}`)
        .type('form')
        .send({ })
        .set('Accept', 'application/json')
        expect(res.statusCode).toBe(400)
    });
    afterAll(() => {
          shell.exec('npx sequelize-cli db:drop');
          shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
          shell.exec('npx sequelize-cli db:seed:all');
        });
});