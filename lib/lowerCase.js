const lc = require('lower-case');

const lowerUser = (username) => lc.lowerCase(username);

module.exports = {
  lowerUser,
};
