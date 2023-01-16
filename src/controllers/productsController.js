const controller = {
  detail: (req, res) => res.render('products/product-detail'),
  create: (req, res) => res.render('products/create')
};

module.exports = controller;
