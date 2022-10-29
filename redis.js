import Redis from 'redis';
import * as dotenv from 'dotenv';
import { getCurrencyValue } from './getters.js';

dotenv.config();

const redisClient = Redis.createClient({ url: process.env.REDIS_URL });

// получаем список криптовалют

(async () => {
  await redisClient.connect();
})();

// получаем список криптовалют
export const getRedisCurrencies = () => redisClient.get('currencies');
// устанавливаем список криптовалют из API
export const setRedisCurrencyList = async (ticker) => {
  const currencyList = JSON.stringify(await getCurrencyValue(ticker));
  await redisClient.set('currencies', currencyList, { EX: 3 });
};

redisClient.on('connect', () => console.log('::> Redis Client Connected'));
redisClient.on('error', (err) => console.log('<:: Redis Client Error', err));

export default redisClient;
