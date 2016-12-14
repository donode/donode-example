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

  // post() {
  //   console.log('UserController post called');
  // }
  //
  // put() {
  //   console.log('UserController put called');
  // }
  //
  // delete() {
  //   console.log('UserController delete called');
  // }
}

module.exports = UserController;
