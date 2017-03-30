'use strict';

module.exports = [
  { path: '/', method: 'GET', handler: 'UserController@get' },
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
];
