module.exports = (sequelize, dataTypes) => {

    let alias = "product_images";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image_route: {
            type: dataTypes.STRING,
        },
        id_product: {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        tablename: "product_images",
        timestamps: false
    }

    const product_images = sequelize.define(alias, cols, config);
    return product_images;
}