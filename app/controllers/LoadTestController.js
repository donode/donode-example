'use strict';

const Controller = require('donode').Controller;
const responseData = require('../response-data');

class LoadTestController extends Controller {
  constructor() {
    super();
    // this.middleware('AuthMiddleware');
    // console.log('loadtest constructor called');
  }

  get(request, response) {
    return response.send(responseData);
  }

  post(request, response) {
    // console.log(request.body);
    return response.send(responseData);
    // return request.body;
  }

  put() {
    return {};
  }

  delete() {
    return {};
  }
}

module.exports = LoadTestController;
