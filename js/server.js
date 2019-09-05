const express = require('express');
const companies = require('./companies');

const server = express();
let PORT = process.env.PORT;

server.use('/api/companies', companies);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('its listening');
});
