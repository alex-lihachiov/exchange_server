/* imports */
const express = require('express');
const redis = require('redis');

const util = require('util');

const redisURL = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisURL);

/* добавляем к утилите редис возможность работать с промисами */
client.set = util.promisify(client.set);

const app = express();
app.use(express.json());

/* Вносим инфу в базу данных */
app.post('/', (req, res) => {
  const { key, value } = req.body;
  client.set(key, value);
});

app.listen(8080, () => {
  console.log('Hey, now listening port 8080');
});
