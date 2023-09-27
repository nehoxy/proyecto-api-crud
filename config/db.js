const {Sequelize} =  require('sequelize');

const sequelize = new Sequelize(
    'escuela',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mysql'
    }
    );

    module.exports = sequelize;