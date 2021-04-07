"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  // 登录
  async login() {
    let { ctx } = this;
    // 拿到username和password（调用接口时传的）
    let { username, password } = ctx.request.body;
    // 找到匹配的账号
    let user = await ctx.model.Backstageuser.findOne({ username, password });
    if (user) {
      ctx.body = {
        code: 200,
        msg: "登录成功",
        data: {
          user,
        },
      };
    } else {
      ctx.body = {
        code: 200,
        msg: "没这人",
      };
    }
  }
  // 注册
  async register() {
    let { ctx,app } = this;
    // 拿到username和password（调用接口时传的）
    let { username,password } = ctx.request.body;
    console.log(username)
    console.log(password)
    // 判断用户名是否存在
    let user = await ctx.model.Backstageuser.findOne({ username });
    // console.log(user)
    if (user) {
      ctx.body = {
        code: 200,
        msg: "该账号已经存在",
      };
    } else {
      // let { ctx } = this;
      let u = new app.model.Backstageuser(ctx.request.body);
      // console.log(u);
      await u.save();
      ctx.body = {
        code: 200,
        msg: "注册成功",
      };
    }
  }
}

module.exports = HomeController;
