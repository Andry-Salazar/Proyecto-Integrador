module.exports = (sequelize, dataTypes) => {

    let alias = "user";
    let cols = {
        id: {
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
        email: {
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        image:{
            type: dataTypes.STRING
        },
        role:{
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