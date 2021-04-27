const Router = require('express');
const StatusCode = require('http-status-codes');

module.exports = (dbService) => {
  const router = Router();

  router.getAsync('', async (req, res) => {
    const data = await dbService.findMany(req.query);
    res.sendFile('${__dirname}/index.html');
  });
  router.postAsync('/test', async (req, res) => {
    await dbService.create(req.body);
    res.sendStatus(StatusCode.CREATED);
  });

  return router;
};
