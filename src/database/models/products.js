module.exports = (sequelize, dataTypes) => {

    let alias = "product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.INTEGER,
        },
        category: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tablename: "products",
        timestamps: false,
    }

    const product = sequelize.define(alias, cols, config);

    return product;
}