'use strict';
const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
    console.log('constructor called ');
  }

  get(request, response) {
    console.log('UserController get called');
    console.log(request.routeParams);
    if (request.routeParams.id) {
      this.something = request.routeParams.id;
    }
    response.send({ hello: 'hi', something: this.something });
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
