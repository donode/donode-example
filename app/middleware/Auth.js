'use strict';
const Middleware = require('donode').Middleware;

class Auth extends Middleware {
  constructor() {
    super();
  }

  handle(request, next) {
    // do some checks
    // return error object if not satisfied
    // else call next()
    next();
  }
}

module.exports = Auth;
