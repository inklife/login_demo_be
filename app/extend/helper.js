'use strict';

const crypto = require('crypto');

const sha1 = str => crypto.createHash('sha1').update(str).digest('hex');
// app/extend/helper.js
module.exports = {
  generatePassHash(password) {
    return sha1(this.app.config.xtoken.salt + password);
  },
};

exports.sha1 = sha1;
