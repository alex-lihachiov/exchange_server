import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.CRYPTO_COMPARE_API_KEY;
const currencyTimeout = 15000;
// const offerTimeout = 900000;
const offersList = [
  {
    id: 1,
    fingerprintId: 'c8d0a997e276fccc178e295f610be9ac',
    currency: { name: 'btc', value: null, deadline: '' },
    amountRub: null,
    amountReceivable: null,
    recipientAddress: '3MQTRzttkMtsMEy9dRq4Sf1xiSsWKgQkyH',
    cardNumber: '',
    deadline: '',
    offerExpirationDate: '',
    isRequisitesAgreementConfirmed: false,
    isPaid: false,
  },
  {
    id: 2,
    fingerprintId: 'c8d0a997e276fccc178e295f610be9ad',
    currency: { name: 'btc', value: null, deadline: '' },
    amountRub: null,
    amountReceivable: null,
    recipientAddress: '3MQTRzttkMtsMEy9dRq4Sf1xiSsWKgQkyH',
    cardNumber: '',
    deadline: '',
    offerExpirationDate: '',
    isRequisitesAgreementConfirmed: false,
    isPaid: false,
  },
  {
    id: 3,
    fingerprintId: 'c8d0a997e276fccc178e295f610be9ac',
    currency: { name: 'btc', value: null, deadline: '' },
    amountRub: null,
    amountReceivable: null,
    recipientAddress: '3MQTRzttkMtsMEy9dRq4Sf1xiSsWKgQkyH',
    cardNumber: '',
    deadline: '',
    offerExpirationDate: '',
    isRequisitesAgreementConfirmed: false,
    isPaid: false,
  },
];

/* работа с бекэндом */
// получение списка доступных криптовалют
export const getCurrencyValue = async (curr) => {
  let response = null;
  const ticker = curr.toUpperCase();

  let currency = { name: curr, value: '' };
  try {
    response = await axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${ticker}&tsyms=rub&api_key=${API_KEY}`
    );
  } catch (err) {
    response = null;
    currency = null;
    // error
    console.log('cryptocompare api not work', err);
  }
  if (response) {
    // success
    console.log('данные с апи получены', response.data.RUB);
    currency.value = response.data.RUB;
    currency.deadline = new Date(Date.now() + currencyTimeout).toISOString();
    // return JSON.stringify(currency);
  }
  return currency;
};
// получение всего списка заявок
export const getOffers = async () => {
  const offers = offersList;
  return offers;
};
// TODO отправка первоначальной заявки
// TODO получение заявки
// TODO получение карты оплаты
// TODO получение списка сообщений
// TODO отправка сообщения в чат
