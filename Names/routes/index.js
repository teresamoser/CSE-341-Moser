const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Marlayna Eliza Moser');
});

module.exports = routes;