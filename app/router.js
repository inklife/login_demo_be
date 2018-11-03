'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // userRouter
  const userRouter = router.namespace('/api/user');
  userRouter.get('/login', controller.user.login);
  userRouter.post('/signup', controller.user.signup);
  userRouter.get('/signout', controller.user.signout);
  userRouter.get('/profile', controller.user.profile);
  //
};
