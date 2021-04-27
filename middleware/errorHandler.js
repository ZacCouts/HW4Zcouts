const StatusCodes = require('http-status-codes');

module.exports = (error, res) => {
  switch (error.name) {
    case 'RecordNotFound':
      res.sendStatus(StatusCodes.NOT_FOUND);
      break;
    case 'ValidationError':
      res.sendStatus(StatusCodes.BAD_REQUEST);
      break;
    default:
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      break;
  }
};
