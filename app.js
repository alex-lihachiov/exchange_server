/* eslint-disable import/extensions */
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import router from './router.js';
import './redis.js';

dotenv.config();
const serverUrl = `${process.env.URL}:${process.env.PORT}`;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.listen(3000, () => console.log(`Server started at <http://${serverUrl}>`));

// запуск клиента redis
