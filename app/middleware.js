'use strict';
const router = require('donode').Router;

router.middleware({
  'auth': 'Auth',
});

module.exports = router;
