const router = require('express').Router();
const {getAll} = require('../database/index.js');

router.get('/', (req, res) => {
  res.send('GET ROUTER WORKS');
});
router.get('/test', (req, res) => {
  getAll()
    .then(response => {
      console.log('Success');
      return res.send(response.rows);
    })
    .catch(err => {
      return console.error('cannot get data from database ', err)
    })
  ;
});
router.get('/products', (req, res) => {
  res.send(req.query.page);
});
router.get('/products/:product_id', (req, res) => {
  res.send(req.params);
});
router.get('/products/:product_id/styles', (req, res) => {
  res.send(req.params);
});
router.get('/products/:product_id/related', (req, res) => {
  res.send(req.params);
});


module.exports.router = router;