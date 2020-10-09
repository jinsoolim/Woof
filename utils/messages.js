const moment = require('moment');

function formatMessage(username, text, userID) {
  return {
    userID,
    username,
    text,
    time: moment().format('h:mm a')
  }
}

module.exports = formatMessage;
