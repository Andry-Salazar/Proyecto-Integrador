module.exports = function(sequelize, dataTypes) {
    let alias = "orders";

    let cols = {
        order_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,

        },
        order_date:{
            type: dataTypes.DATE
        },
        order_status:{
            type: dataTypes.BOOLEAN
        }

    }

    let config = {
        tableName: "orders",
        timestamps: true
    }

    let order = sequelize.define(alias, cols, config);

    order.associate = function(models) {
        order.hasMany(models.orders_products, {
            as: "orders_products",
            foreignKey: "orders_products_id"
            // otherKey:
        })
    }

    return order;

}