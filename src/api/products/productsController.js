const db = require('../../database/models');

async function getAll(req, res) {
  const products = await db.product.findAll();
  res.json(products);
}

async function get(req, res) {
  const productsDetail = await db.product.findOne({
    where: {
      product_id: req.params.id,
    },
  });
  res.json(productsDetail);
}

module.exports = { getAll, get };
