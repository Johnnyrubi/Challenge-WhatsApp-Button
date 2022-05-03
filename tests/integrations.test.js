const request = require("supertest");
const  sequelize  = require('sequelize');
const {
    expect,
    describe,
    test,
    afterAll,
  } = require('@jest/globals');



const { Button } = require('../models');
const app = require('../index');


const disc = async () => {
    await Button.sequelize.close();
};



describe('API Testing routes', () => {
    test('getAll test with a sucesfull case', async () => {
        const res = await request(app)
        .get('/o')
        .send({ "name": "johnny" })
        expect(res.statusCode).toBe(200);
    });
});

/* try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
 */



afterAll( async () => {
    try {
        await Button.sequelize.close();
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });