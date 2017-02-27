'use strict';
const headers = require('donode').Headers;

headers.register({
  'json-content': { name: 'Content-Type', value: 'application/json; charset=UTF-8'},
  'allow-cors': [
    { name: 'Access-Control-Allow-Origin', value: '*'},
    { name: 'Access-Control-Allow-Headers', value: 'Origin, X-Requested-With, Content-Type, Accept'}
  ]
});
