'use strict';

const Controller = require('donode').Controller;

class UserSettingsController extends Controller {
  constructor() {
    super();
  }


  get(request) {
    return {
      data: 'some data'
    };
  }
}

module.exports = UserSettingsController;
