'use strict';

const routes = [
  { path: '/', method: 'GET', handler: 'UserController@get' },
  {
    path: '/hello',
    method: 'GET',
    handler: 'UserController@get',
    children: [
      { path: '/something', method: 'GET', handler: 'UserController@get' }
    ]
  }
];


/*
    All API routes will be prefixed with 'api'
    which avoids conflicts with the static content which is served from 'public' directory
*/
module.exports = [{
  path: '/api',
  middleware: { all: ['Auth'] },
  headers: ['json-content', 'allow-cors'],
  children: routes
}];
