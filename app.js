'use strict';
const app = require('express')();

app.get('/', (req, res)=>res.send('Hello World!'));
const server = app.listen(process.env.PORT || 3000, ()=> {
  let host = server.address().address;
  let port = server.address().port;
  if (host === '::') host = 'localhost';
  console.log(`Example app listening at http://${host}:${port}`);
});
