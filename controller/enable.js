/* eslint-disable no-unused-vars */
const { User } = require('../models');

const enable = async (req, res) => {
  const { status } = req.user;

  let user = {};
  try {
    user = await User.findOne({
      where: { status },
    });
  } catch (err) {
    return res.status(400).json(err);
  }
  if (req.user.status === 'enable') {
    const result = {
      status: 'error',
      message: 'Wallet already enable',
    };
    return res.status(400).json(result);
  }

  user = User.update({
    status: 'enable',
  }, { where: { id: req.user.id } });

  const result = {
    status: 'success',
    data: 'Your wallet is enable',
  };
  return res.status(202).json(result);
};

module.exports = {
  enable,
};
