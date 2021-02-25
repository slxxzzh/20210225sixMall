
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 测试
  router.get('/test',controller.test.test)
  // 后台-登录
  router.post('/backStageUser/login',controller.backStageUser.login)
  // 后台-注册
  router.post('/backStageUser/register',controller.backStageUser.register)
};
