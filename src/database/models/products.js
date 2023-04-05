module.exports = (sequelize, dataTypes) => {

    let alias = "product";
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: dataTypes.STRING,
        },
        product_description: {
            type: dataTypes.STRING,
        },
        product_price: {
            type: dataTypes.INTEGER,
        },
        product_image: {
            type: dataTypes.STRING,
        },
        category_id: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tablename: "products",
        timestamps: false
    }

    const product = sequelize.define(alias, cols, config);

    return product;
}