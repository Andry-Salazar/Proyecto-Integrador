module.exports = (sequelize, dataTypes) => {

    let alias = "category";
    let cols = {
        category_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tablename: "categorys",
        timestamps: false
    }

    const category = sequelize.define(alias, cols, config);
    category.assosiate = function (models) {
        category.hasMany(models.product, {
            as: 'product',
            foreignkey: "category_id"
        })
    }

    return category;
}