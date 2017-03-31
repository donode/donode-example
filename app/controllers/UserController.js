'use strict';
const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
  }

  get(request, response) {
    console.log(request.url);
    console.log(request.originalUrl);
    console.log(request.hostname);
    response.send({ hi: 'this is data' });

    // console.log(response.headersSent);
  }

  post(request, response) {
    console.log(request.headers);
    console.log(request.queryParams);
    console.log(request.routeParams);
    console.log(request.body);
    return {
      result: 'data posted'
    };
  }

  put(request, response) {
    console.log('UserController put called');
    return {
      result: 'data updated'
    };
  }

  delete(request, response) {
    console.log('UserController delete called');
    return {
      result: 'data deleted'
    };
  }
}

module.exports = UserController;
