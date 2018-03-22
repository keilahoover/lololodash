const _ = require('lodash');

const user = function (user) {
  let filterUsers = _.filter(user, { active: true });
  return filterUsers;
}

module.exports = user;
