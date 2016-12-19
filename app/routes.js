'use strict';
const Router = require('donode').Router;
const router = new Router();

router.get('/hello', 'UserController@get');
router.post('/hello', 'UserController@post');

module.exports = router;
