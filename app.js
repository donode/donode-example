const Server = require('donode').Server;
const routes = require('./app/routes');
const config = require('./config/config');

const listner = new Server(routes, Object.assign(config, {
  appRoot: __dirname
})).listner;

listner.listen(3000);
