const Server = require('donode').Server;
const routes = require('./app/routes');

const config = {
  appRoot: __dirname
}

const listner = new Server(routes, config).listner;

listner.listen(3000);
