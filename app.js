const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const client = require('./database/index.js');
const port = 3000;