const express = require('express');
const isLoggedIn = require('../middlewares/isLoggedIn');
const userModel = require('../models/userModel');
const orderModel = require('../models/orderModel');
const router = express.Router();

router.post('/checkout', isLoggedIn, async (req, res) => {
    try {
        const { userId, items, address, payment, totalAmount } = req.body;
        //Verify user
        const user = await userModel.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });
        //Save address if not already saved
        if (!user.address) {
            user.address = address;
            await user.save();
        }
        //Create new order
        const newOrder = await orderModel.create({
            userId,
            items,
            address,
            paymentMethod: payment.method,
            totalAmount,
            status: "Pending",
            date: new Date()
        });
         await newOrder.save();
         //Add the order to user's orders array
         user.orders.push(newOrder._id);
         await user.save();
         res.status(201).json({ message: "Order placed successfully"});
    } catch (error) {

    }
})
//Get all user orders
router.get("/myorders", isLoggedIn, async (req, res) => {
  try {
    // Find all orders placed by this user
    const orders = await orderModel
      .find({ userId: req.user._id })
      .populate({
        path: "items.bookId", // get book details inside each order item
        select: "title author price image" // only pick required fields
      })
      .populate({
        path: "userId",
        select: "username email address phone" // optional, for display
      })
      .sort({ createdAt: -1 }); // latest orders first

    if (!orders.length)
      return res.status(404).json({ message: "No orders found" });

    // Return a structured response
    res.json({
      totalOrders: orders.length,
      orders: orders.map(order => ({
        orderId: order._id,
        items: order.items.map(item => ({
          book: item.bookId,
          quantity: item.quantity,
          totalPrice: item.quantity * item.bookId.price
        })),
        paymentMethod: order.paymentMethod,
        totalAmount: order.totalAmount,
        orderDate: order.createdAt,
        status: order.status
      }))
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;