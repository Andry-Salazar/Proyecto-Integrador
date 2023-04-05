module.exports = (sequelize, dataTypes) => {

    let alias = "user";
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name:{
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        user_email: {
            type: dataTypes.STRING,
        },
        user_password:{
            type: dataTypes.STRING,
        },
        user_image:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tablename: "users",
        timestamps: false
    }

    const user = sequelize.define(alias, cols, config);

    return user;
}