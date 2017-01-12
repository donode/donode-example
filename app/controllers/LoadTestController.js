'use strict';

const Controller = require('donode').Controller;
const responseData = require('../response-data');

class LoadTestController extends Controller {
  constructor() {
    super();
    // this.middleware('AuthMiddleware');
    console.log('loadtest constructor called');
  }

  get(request) {
    return responseData;
  }

  post(request) {
    // console.log(request.body);
    return request.body;
  }

  put() {
    return {};
  }

  delete() {
    return {};
  }
}

module.exports = LoadTestController;
