/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { User } = require('../models');

const buy = async (req, res) => {
  const { items, price } = req.body;
  const { balance } = req.user;

  if (req.user.status === 'disable') {
    const result = {
      status: 'error',
      message: 'Your wallet is disable, enable your wallet first',
    };
    return res.status(400).json(result);
  }

  if (req.user.balance === 0) {
    const result = {
      status: 'error',
      message: 'Your balance is 0, deposit first',
    };

    return res.status(400).json(result);
  }

  let user = {};

  try {
    user = await User.findOne({
      where: { balance },
    });
    newBalance = req.user.balance - price;
  } catch (err) {
    return res.status(400).json(err);
  }
  user = await User.update({
    balance: newBalance,
  }, { where: { id: req.user.id } });

  const result = {
    status: 'success',
    message: `success to bought ${items} with price: ${price}`,
  };
  return res.status(202).json(result);
};

module.exports = {
  buy,
};
