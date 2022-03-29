/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { User } = require('../models');

const add = async (req, res) => {
  const { inputBalance } = req.body;

  const { balance } = req.user;

  if (req.user.status === 'disable') {
    const result = {
      status: 'error',
      message: 'Your wallet is disable, enable your wallet first',
    };
    return res.status(400).json(result);
  }
  let user = {};
  try {
    user = await User.findOne({
      where: { balance },
    });

    newBalance = req.user.balance + inputBalance;
  } catch (err) {
    return res.status(400).json(err);
  }

  user = await User.update({

    balance: newBalance,
  }, { where: { id: req.user.id } });

  const result = {
    status: 'success',
    message: `success to deposit ${inputBalance}`,
  };
  return res.status(202).json(result);
};

module.exports = {
  add,
};
