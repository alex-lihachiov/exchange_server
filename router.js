import { Router } from 'express';
import OfferController from './OfferController.js';

const router = new Router();

router.get('/cryptocurrencies', OfferController.getCurrencies);
// отправка первоначальной заявки
router.post('/offer', OfferController.createOffer);
// TODO получение заявки
router.get('/offer/:id', OfferController.getCurrencies);
// TODO получение карты оплаты
router.get('/offer/:id', OfferController.getCurrencies);
// TODO получение списка сообщений
router.get('/chat/:id', OfferController.getCurrencies);
// TODO отправка сообщения в чат
router.post('/chat/:id', OfferController.getCurrencies);

export default router;
