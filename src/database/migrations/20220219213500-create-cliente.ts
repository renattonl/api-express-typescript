import { QueryInterface, DataTypes } from 'sequelize';
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombres: {
        type: DataTypes.STRING,
      },
      apellidos: {
        type: DataTypes.STRING,
      },
      fecha_nacimiento: {
        type: DataTypes.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Clientes');
  },
};
