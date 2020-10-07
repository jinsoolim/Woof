const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const loginRouter = require("./routers/login");

// SETTING UP SERVER
const server = express();
const PORT = 3000;

// ESTABLISH CONNECTION TO DATABASE
const 
  MONGO_URI
 = 'mongodb+srv://woof:codesmith123@woof.qaamj.mongodb.net/woof?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO MONGO DB'))
  .catch((err) => console.log(err));

// SET UP
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use("/api", loginRouter);

// DIRECT ALL INCOMING TRAFFIC TO HOMEPAGE 
server.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// GLOBAL ERROR HANDLER
server.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error: Unknown middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };

  console.log('ERROR LOG => ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

server.listen(PORT);

// STARTUP LOGS
// console.log(
//   'Remember to check your .env file if you cannot connect to the database'
// );
console.log(`Server is listening at http://localhost:${PORT}`);
console.log(`Client is live at http://localhost:8080`);
