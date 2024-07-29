import express from 'express'
import {checkout , verify , userOrder, allOrders} from '../Controllers/payment.js'
import {Authenticated} from '../Middleware/auth.js'

const router = express.Router();

router.post('/checkout',checkout);

router.post('/verify-payment',verify)

router.get('/userorder',Authenticated , userOrder)

router.get('/allorder',allOrders);

export default router;
