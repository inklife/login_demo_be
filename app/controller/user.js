'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.validate({
      name: 'string',
      password: 'string',
    }, ctx.query);
    const password = ctx.helper.generatePassHash(ctx.query.password);
    const resp = await this.service.user.check(ctx.query.name, password);
    if (resp) {
      ctx.session.name = ctx.query.name;
      ctx.body = {
        code: 0,
        data: 'done',
      };
    } else {
      ctx.body = {
        code: 1,
        data: 'wrong',
      };
    }
  }

  async signup() {
    const { ctx } = this;
    ctx.validate({
      name: 'string',
      email: 'string',
      passwd: 'string',
    });
    const data = ctx.request.body;
    const entiy = {
      name: data.name,
      email: data.email,
      password: ctx.helper.generatePassHash(data.passwd),
    };
    await this.service.user.create(entiy);
    // 登录
    ctx.session.name = data.name;
    ctx.body = {
      code: 0,
      data: 'done',
    };
  }

  async signout() {
    const { ctx } = this;
    delete ctx.session.name;
    ctx.body = {
      code: 0,
      data: 'done',
    };
  }

  async profile() {
    const { ctx } = this;
    const { name } = ctx.session;
    if (name) {
      const data = await this.service.user.getProfileByName(name);
      ctx.body = {
        code: 0,
        data,
      };
    } else {
      ctx.body = {
        code: 1,
        data: '未验证的用户[未登录]',
      };
    }
  }
}

module.exports = UserController;
