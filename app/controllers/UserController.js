'use strict';

const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
  }

  get(request) {
    console.log('UserController get called');

    return {
      hello: 'world !!!!'
    };
  }

  post(request) {
    console.log('UserController post called');
    console.log(request.headers);
    console.log(request.queryParams);
    console.log(request.routeParams);
    console.log(request.body);
    return {
      result: 'data posted'
    };
  }

  put() {
    console.log('UserController put called');
    return {
      result: 'data updated'
    };
  }

  delete() {
    console.log('UserController delete called');
    return {
      result: 'data deleted'
    };
  }
}

module.exports = UserController;
