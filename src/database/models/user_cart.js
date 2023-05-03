module.exports = (sequelize, dataTypes) => {

    let alias = "user_cart";
    let cols = {
        cart_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        quantity: {
            type: dataTypes.INTEGER,
        },

        product_id: {
            type: dataTypes.INTEGER,
        },

        user_id: {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        tablename: "user_cart",
        timestamps: false
    }

    const user_cart = sequelize.define(alias, cols, config);
    
    // user_cart.associate = function (models) {
    //     user_cart.hasOne(models.product, {
    //         as: "FK_user_cart_products",
    //         foreignKey: "product_id"
    //     }),
    //     user_cart.hasOne(models.user, {
    //         as: "FK_user_cart_users",
    //         foreignKey: "user_id"
    //     })
    // }
    
    return user_cart;
}