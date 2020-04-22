const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

//Connect to Database
connectDB();

//Route Files
const issues = require('./routes/issues');
const users = require('./routes/users');

const app = express();

//Body Parser
app.use(express.json());

//Mount Routers
app.use('/api/issues', issues);
app.use('/api/users', users);

//Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandled promise rejections instead of try catch for mongodb
process.on('unhandledRejection', (err, promise) => {
  console.log('Error: ${err.message');

  //close server & exit process
  server.close(() => process.exit(1));
});
