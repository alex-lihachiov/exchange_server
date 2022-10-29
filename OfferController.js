import { getRedisCurrencies, setRedisCurrencyList } from './redis.js';

class OfferController {
  async getCurrencies(req, res) {
    const { ticker } = req.headers;
    const currenciesRedis = await getRedisCurrencies();
    console.log(req.headers.ticker);
    if (!currenciesRedis) {
      await setRedisCurrencyList(ticker);
      const data = JSON.parse(await getRedisCurrencies());
      res.json(data);
    } else {
      res.json(JSON.parse(currenciesRedis));
    }
  }

  /*  async getOne(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  } */
}
export default new OfferController();
