const service = require('../../services');

describe('testing services', () => {
    describe('testing getAll', () => {
        test('testing getAll with a sucesfull request', async () => {
            /* range */
            const valueButton = {
                    "name": "JohnnyTecnology",
                    "companyId": "969895959aa6a0a3a46074a9a5b1b4b29e6b",
                    "ownerId": "969895959aa6a0a3a46074a9a5b1b4b29e6b",
                    "statusId": true,
                    "config": "({position: 'bottom-right',position_mobile: 'center-left',button_text: 'Fale com  Johnny'})"
            }
            /* act */
            const buttons = await service.getAll();
            /* assert */
        });
    });
});