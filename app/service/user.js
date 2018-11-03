'use strict';
// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async create(entiy) {
    return await this.app.mysql.insert('user', entiy);
  }

  async check(name, password) {
    return await this.app.mysql.get('user', { name, password });
  }

  async getProfileByName(name) {
    const resp = await this.app.mysql.get('user', { name });
    if (resp) {
      const { name, email } = resp;
      return { name, email };
    }
    return null;
  }
}

module.exports = UserService;
