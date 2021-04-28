const Express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const ErrorHandler = require('../middleware/errorHandler');
const Router = require('../middleware/router');
const dbService = require('../database/dbService');
require('dotenv').config();

const app = Express();

app.use(BodyParser.json());
app.use(ErrorHandler);
app.use(dbService);

app.use('/', Router);

(async () => {
  await Mongoose.connect(process.env.Credentials, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  app.listen(8080) {
    console.log('listening on *${port}');
  });

})();
