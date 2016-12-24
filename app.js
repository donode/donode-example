const Server = require('donode').Server;
const routes = require('./app/routes');
const config = require('./config/config');

const listener = new Server(routes, Object.assign(config, {
  appRoot: __dirname
})).listener;

listener.listen(3000);
