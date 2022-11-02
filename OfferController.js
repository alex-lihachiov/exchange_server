import { response } from 'express';
import { getRedisCurrencies, setRedisCurrencyList } from './redis.js';

class OfferController {
  async getCurrencies(req, res) {
    const currenciesRedis = await getRedisCurrencies();
    console.log(req.headers.ticker);
    if (!currenciesRedis) {
      await setRedisCurrencyList();
      const data = JSON.parse(await getRedisCurrencies());
      res.json(data);
    } else {
      res.json(JSON.parse(currenciesRedis));
    }
  }

  async createOffer(req, res) {
    console.log(req.body);
    const offer = req.body;
    res.json(offer);
  }
}
export default new OfferController();
