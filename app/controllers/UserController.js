'use strict';

class UserController {
  constructor() {
    // console.log('constructor called');
  }

  get() {
    // console.log('UserController get called');
    return {
      hello: 'world !!!!'
    };
  }

  post() {
    console.log('UserController post called');
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
