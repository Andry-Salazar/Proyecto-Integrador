const db = require('../../database/models');

async function getAll(req, res) {
  let category = Number(req.query.category);
  const where = category ? { category } : {};
  const products = await db.product.findAll({
    include: ['images'],
    where,
  });

  res.json({ count: products.length, products });
}

async function get(req, res) {
  const productsDetail = await db.product.findOne({
    include: ['images'],
    where: {
      id: req.params.id,
    },
  });
  res.json(productsDetail);
}

module.exports = { getAll, get };
