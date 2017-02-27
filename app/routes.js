'use strict';
const router = require('donode').Router;

router.routes([
  // { path: '/', method: 'GET', handler: 'UserController@get' },
  {
    path: '/hello',
    method: 'GET',
    handler: 'UserController@get',
    middleware: { all: ['user/Auth']}, // 'Auth'],
    headers: ['json-content'],

    // middleware: {
    //   all: ['Auth'],
    //   // current: ['Auth'],
    //   // children: ['Auth']
    // },
    //
    children: [
      { path: '/something', method: 'GET', handler: 'UserController@get', middleware: ['user/Auth'] }
    ]
  },
  // {
  //   path: '/hello',
  //   method: 'POST',
  //   handler: 'UserController@post'
  // },
  // { path: '/hello/{id}', method: 'GET', handler: 'UserController@get' },
  //
  // { path: '/user/settings', method: 'GET', handler: 'user/UserSettingsController@get' },

  // { path: '/user', method: 'ALL', handler: 'UserController' }


  // {
  //   path: '/loadtest/get/{id1}',
  //   method: 'GET',
  //   handler: 'LoadTestController@get',
  //   children: [
  //     { path: '/something1/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something2/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something3/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something4/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something5/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something6/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something7/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something8/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something9/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //     { path: '/something10/{id2}', method: 'GET', handler: 'LoadTestController@get' },
  //   ]
  // },
  //
  // {
  //   path: '/loadtest/post/{id1}',
  //   method: 'POST',
  //   handler: 'LoadTestController@post',
  //   children: [
  //     { path: '/something1/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something2/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something3/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something4/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something5/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something6/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something7/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something8/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something9/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //     { path: '/something10/{id2}', method: 'POST', handler: 'LoadTestController@post' },
  //   ]
  // }

]);

module.exports = router;
