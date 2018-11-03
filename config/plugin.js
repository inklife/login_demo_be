'use strict';

// had enabled by egg
// exports.static = true;

// {app_root}/config/plugin.js
exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};

// config/plugin.js
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

