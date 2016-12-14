'use strict';
const Router = require('donode').Router;
const router = new Router();

router.get('/hello', 'UserController@get');

module.exports = router;
