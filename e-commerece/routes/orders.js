import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// POST /orders → Add new order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: "Bad Request" });
  }
});

export default router;
