const { User } = require('../models');

const view = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    if (req.user.status === 'disable') {
      const result = {
        status: 'error',
        message: 'Your wallet is disable, enable your wallet first',
      };
      return res.status(400).json(result);
    }
    if (!user) {
      return res.status(404).json('error');
    }
    const result = {
      status: 'success',
      data: { wallet: user },

    };
    return res.status(202).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  view,
};
