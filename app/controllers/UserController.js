'use strict';

const MasterController = require('./base/MasterController');

module.exports = class UserController extends MasterController {
  constructor() {
    // console.log('constructor called');
    super();
  }

  get(request) {
    console.log('UserController get called');

    super.validate();

    return {
      hello: 'world !!!!'
    };
  }

  post(request) {
    console.log('UserController post called');
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
