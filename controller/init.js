const { generateToken } = require('../lib/generateToken');
const { checkPW } = require('../lib/checkPW');
const { encrypt } = require('../lib/hashing');
const { User } = require('../models');

const init = async (req, res) => {
  const {
    username, password, name, balance,
  } = req.body;

  const encryptedPassword = encrypt(password);

  try {
    if (req.body.username === '' || req.body.password === '') {
      const result = {
        status: 'error',
        message: 'Username or Password cannot be empty',
      };

      return res.status(401).json(result);
    }
  } catch (err) {
    return res.status(409).json(err);
  }

  try {
    const user = await User.findOne({
      where: { username },
    });
    if (user) {
      const result = {
        status: 'error',
        message: 'Username already exist',
      };
      return res.status(409).json(result);
    }
  } catch (err) {
    return res.status(409).json(err);
  }

  const user = await User.create({
    username,
    password: encryptedPassword,
    name,
    balance,
    status: 'disable',
  });

  const result = {
    status: 'success',
    message: 'Register Success',
    data: user,
  };
  return res.status(202).json(result);
};

const login = async (req, res) => {
  const { username, password } = req.body;
  let user = {};
  try {
    user = await User.findOne({
      where: { username },
    });
  } catch (err) {
    return res.status(409).json(err);
  }
  if (!user) {
    const result = {
      status: 'error',
      message: "Users doesn't exist",
    };
    return res.status(401).json(result);
  }
  try {
    user = await User.findOne({
      where: { username },
    });
  } catch (err) {
    return res.status(409).json(err);
  }
  if (req.body.user === '' || req.body.password === '') {
    const result = {
      status: 'error',
      message: 'Username or Password cannot be empty',
    };

    return res.status(401).json(result);
  }
  const isPasswordValid = checkPW(password, user.password);
  if (!isPasswordValid) {
    const result = {
      status: 'error',
      message: 'Wrong password',
    };
    return res.status(409).json({ result });
  }

  const data = {
    usernameLogin: username,
    balance: user.balance,
    status: user.status,
  };

  const result = {
    status: 'Success',
    message: 'Login Success',
    accessToken: generateToken(user),
    data,
  };
  return res.status(202).json(result);
};

module.exports = {
  init,
  login,
};
