'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = `Hi, eggjs is now running in ${this.app.config.env} mode.`;
  }
}

module.exports = HomeController;
