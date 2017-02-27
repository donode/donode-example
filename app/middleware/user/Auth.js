'use strict';
const Middleware = require('donode').Middleware;

class Auth extends Middleware {
  constructor() {
    super();
  }

  handle(request, response, next) {
    // do some checks
    // return error object if not satisfied
    // else call next()

    console.log('user/auth middleware called');
    // return response.send({ data: 'user/Auth' });

    return next();
  }
}

module.exports = Auth;
