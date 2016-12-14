const Server = require('donode').Server;
const routes = require('./app/routes');
const listner = new Server(routes).listner;

listner.listen(3000);
