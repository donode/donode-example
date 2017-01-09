const server = require('donode').Server;
const routes = require('./app/routes');
const config = require('./config/config');

const listener = server.create(routes, Object.assign(config, {
  appRoot: __dirname
}));

listener.listen(3000);
