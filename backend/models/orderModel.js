const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  address: {
    street: String,
    city: String,
    zip: String,
    country: String
  },
  payment: {
    method: String,
    transactionId: String
  },
  totalAmount: Number,
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('order', orderSchema);
