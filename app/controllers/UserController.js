'use strict';
const Controller = require('donode').Controller;

class UserController extends Controller {
  constructor() {
    super();
    console.log('constructor called ');
  }

  get(request, response) {
    console.log('UserController get called');

    // const p = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ hi: 'this is await' });
    //   }, 5000);
    // });

    // await p;



    response.send({ hi: 'this is data', env: process.env.NODE_ENV });
  }

  post(request, response) {
    console.log('UserController post called');
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
