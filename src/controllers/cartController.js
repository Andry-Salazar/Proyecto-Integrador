const db = require("../database/models");

const controller = {
  index: (req, res) => res.render('products/cart'),

  create: async (req, res) => {

    try {

      const userCart = {
        quantity: 1,
        product_id: req.params.product_id,
        user_id: req.params.user_id
      }

      await db.user_cart.create(userCart);
      res.redirect('/')

    } catch (error) {
      console.log(error)
    }
  },

  consultar: async (req, res) => {
    try {
      const [results, metadata] = await db.sequelize.query(
        "SELECT * FROM user_carts JOIN products ON user_carts.product_id=products.id JOIN product_images ON user_carts.product_id= product_images.id_product  WHERE user_carts.user_id=" + req.params.user_id
      );

      if (results) {
        const reduced = results.reduce((acc, product) => {
          const { product_id, image_route, ...rest } = product;
          const existingProduct = acc.find((p) => p.product_id === product_id);
          const image = { image_route };
          if (existingProduct) {
            existingProduct.images.push(image);
          } else {
            acc.push({ ...rest, product_id, images: [image] });
          }
          return acc;
        }, []);
        const subtotal = reduced.map(x => x.quantity * x.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        res.render('products/cart', { results: reduced, subtotal, total: subtotal + 10000 })
      }

    } catch (error) {
      console.log(error)
    }
  },

  destroy: (req, res) => {
    db.user_cart.destroy({
      where: {
        cart_id: req.params.id
      }
    })
    res.redirect('/cart/' + req.params.user_id);
  },

  updateQuantity: async (req, res) => {
    const current = await db.user_cart.findOne({
      where: {
        cart_id: req.params.id
      }
    }).then(x => x?.dataValues)
    current.quantity = current.quantity + 1;

    db.user_cart.update(current, {
      where: {
        cart_id: req.params.id
      }
    })
    res.redirect('/cart/' + req.params.user_id);
  },

  substractQuantity: async (req, res) => {
    const current = await db.user_cart.findOne({
      where: {
        cart_id: req.params.id
      }
    }).then(x => x?.dataValues)
    current.quantity = current.quantity - 1;

    db.user_cart.update(current, {
      where: {
        cart_id: req.params.id
      }
    })
    res.redirect('/cart/' + req.params.user_id);
  },
};

module.exports = controller;
