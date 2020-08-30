'use strict';
const { getMovies, getBooks, setMovie, setBook } = require('./db')

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getMovies = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(getMovies())
  })
}

module.exports.getBooks = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(getBooks())
  })
}

module.exports.setMovie = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(setMovie(event.title))
  })
}

module.exports.setBook = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(setBook(event.title))
  })
}