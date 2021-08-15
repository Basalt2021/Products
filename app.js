
const express = require('express');
const morgan = require('morgan');
const products = require('./routes/products');
const config = require('./config');

const app = express();

const PORT = 3000;

app.use('/products', products);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const client = require('./database/index.js');
// const port = 3000;