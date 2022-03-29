const home = async (req, res) => {
  try {
    const result = {
      status: 'success',
      message: 'Welcome to mini wallet services',
    };
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  home,
};
