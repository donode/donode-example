require('./app/routes');
require('./app/headers');

const server = require('donode').Server;
const config = require('./config');

const listener = server.create(Object.assign(config, {
  appRoot: __dirname
}));

listener.listen(3000);
