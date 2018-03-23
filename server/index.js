const server = require('./app.js');
require('newrelic');

server.listen(3002, () => {
  console.log('Listening on port 3002 ...');
});
