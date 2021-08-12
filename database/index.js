const {config} = require('../config.js');
const {Client} = require('pg');

const client = new Client(config);

client.connect()
  .then(res => console.log('successful connection'))
  .catch(error => console.error('There was an error when connecting to database', error.stack));

module.exports = client;