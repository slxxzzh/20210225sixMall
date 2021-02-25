'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 测试
  async test(){
    let {ctx} = this
    ctx.body={
      code:200,
      msg:"？222",
      data:{
        nicename:"abc"
      }
    }
  }
}

module.exports = HomeController;
