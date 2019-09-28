const express = require('express');
const path = require('path');
const projects = require('./projects');

const server = express();
server.use(express.static(path.join(__dirname,'./grayscale')));
server.use(express.static(path.join(__dirname,'./css')));
server.use('/', (req, res, next)=>{
   res.sendFile(path.join(__dirname, '../index.html'));
})
server.use('/projects', projects);
server.listen(3009, () => {
  // eslint-disable-next-line no-console
  console.log('its listening');
});
