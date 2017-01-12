const server = require('donode').Server;
const config = require('./config/config');
require('./app/routes');
require('./app/middleware');

const listener = server.create(Object.assign(config, {
  appRoot: __dirname
}));

listener.listen(3000);
