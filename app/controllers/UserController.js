'use strict';

module.exports = class UserController {
  constructor() {
    // console.log('constructor called');
  }

  get(request) {
    console.log('UserController get called');
    console.log(request.params);
    return {
      hello: 'world !!!!'
    };
  }

  post(request) {
    console.log('UserController post called');
    console.log(request.queryParams);
    console.log(request.routeParams);
    console.log(request.inputs);
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
