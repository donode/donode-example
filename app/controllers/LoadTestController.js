'use strict';

const responseData = require('../response-data');

module.exports = class UserController {
  constructor() {
    // console.log('constructor called');
  }

  get(request) {
    return responseData;
  }

  post(request) {
    return {
      result: 'data posted'
    };
  }

  put() {
    return {
      result: 'data updated'
    };
  }

  delete() {
    return {
      result: 'data deleted'
    };
  }
}
