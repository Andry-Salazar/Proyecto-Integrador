module.exports = (sequelize, dataTypes) => {
  let alias = 'product';
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
    },
  };
  let config = {
    tablename: 'products',
    timestamps: false,
  };

  const product = sequelize.define(alias, cols, config);

  // Aquí va la relación de productos e imagenes
  product.associate = (models) => {
    product.hasMany(models.product_images, {
      as: 'images',
      foreignKey: 'id_product',
    });
  };

  return product;
};
