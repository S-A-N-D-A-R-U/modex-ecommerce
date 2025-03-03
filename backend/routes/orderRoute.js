import express from 'express';
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateOrderStatus, verifyStripe} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Feature
orderRouter.post('/list', adminAuth ,allOrders);
orderRouter.post('/status', adminAuth ,updateOrderStatus);


// Payment Feature
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('razorpay', authUser, placeOrderRazorpay)


// User feature
orderRouter.post('/userorders', authUser, userOrders)

// verify payment
orderRouter.post('/verifystripe' , authUser, verifyStripe)

export default orderRouter
