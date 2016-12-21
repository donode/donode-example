'use strict';
const router = require('donode').Router;

router.routes([
  { path: '/hello', method: 'GET', handler: 'UserController@get' },
  { path: '/hello', method: 'POST', handler: 'UserController@post' },
  { path: '/hello/{id}', method: 'GET', handler: 'UserController@get' }
]);

module.exports = router;
