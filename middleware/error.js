const errorResponse = require('../utils/errorResponse.js');

const errorHandler = (err, req, res, nex) => {
  let error = { ...err };

  error.message = err.message;

  //Dev - Checking For Error Values
  console.log(err);

  // Mongoose Error - Incorrect ObjectId
  if (err.name === 'CastError') {
    const message = `Resource Not Found`;
    error = new errorResponse(message, 404);
  }

  // Mongoose Error - Validation
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new errorResponse(message, 400);
  }

  // Mongoose Error - Duplicate Key
  if (err.code === 11000) {
    const message = 'Duplicate Value Entered';
    error = new errorResponse(message, 400);
  }

  // Server Error
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
