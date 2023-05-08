const db = require('../../database/models');

async function getAll(req, res) {
  const users = await db.user.findAll();
  res.json(users);
}

async function get(req, res) {
  const usersDetail = await db.user.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(usersDetail);
}

module.exports = { getAll, get };
