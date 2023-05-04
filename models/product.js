import Sequelize from "sequelize";
import database from  './database.js';

const product = database.define('product',{
    id: {
        type: Sequelize.INTEGER,
        autoIncerement: true,
        allowNull: false,
        primaryKey: true
    },
    productName: Sequelize.STRING,
    productPrice: Sequelize.DOUBLE,
    productMainImage: Sequelize.STRING,
    productDescription: Sequelize.TEXT,
    isAvailable: Sequelize.BOOLEAN,
    unitInStock: Sequelize.INTEGER,
})

export default product;