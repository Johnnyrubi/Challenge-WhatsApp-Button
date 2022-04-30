const Button = (sequelize, DataTypes) => {
  const Button = sequelize.define("Button", {
    companyId: DataTypes.STRING,
    ownerId: DataTypes.STRING,
    name: DataTypes.STRING,
    buttonType: DataTypes.STRING(10),
    config: DataTypes.BLOB,
    statusId: DataTypes.BOOLEAN
  });
  return Button;
};

module.exports = Button;
