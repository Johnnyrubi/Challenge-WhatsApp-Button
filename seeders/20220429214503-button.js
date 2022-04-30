'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Buttons',
    [
      {
        name: 'HeaderCompany',
        companyId: '969895959aa6a0a3a46074a9a5b1b4b29e6b',
        ownerId: '969895959aa6a0a3a46074a9a5b1b4b29e6b',
        statusId: true,
        config: "({position: 'bottom-right',position_mobile: 'center-left',button_text: 'Fale com  Hotel'})",
      },
      {
        name: 'HeaderTecnology',
        companyId: '969895959aa6a0a3a46074a9a5b1b4b29e6b',
        ownerId: '969895959aa6a0a3a46074a9a5b1b4b29e6b',
        statusId: false,
        config: "({position: 'bottom-right',position_mobile: 'center-left',button_text: 'Fale com  Hotel'})",
      },
      {
        name: 'NewTecnology',
        companyId: '969895959aa6a0a3a46074a9a5b1b4b29e6b',
        ownerId: '969895959aa6a0a3a46074a9a5b1b4b29e6b',
        statusId: false,
        config: "({position: 'bottom-right',position_mobile: 'center-left',button_text: 'Fale com  Hotel'})",
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Buttons', null, {}),
};
