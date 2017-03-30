'use strict';

module.exports = {
  'json-content': { name: 'Content-Type', value: 'application/json; charset=UTF-8'},
  'allow-cors': [
    { name: 'Access-Control-Allow-Origin', value: '*'},
    { name: 'Access-Control-Allow-Headers', value: 'Origin, X-Requested-With, Content-Type, Accept'}
  ]
};
