const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
      minlength: 2,
      maxlength: 150,
    },

    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, 'Book price is required'],
      min: [0, 'Price cannot be negative'],
    },

    delivery: {
      type: Number,
      default: 0,
      min: [0, 'Delivery cost cannot be negative'],
    },

    datePublished: {
      type: Date,
      default: Date.now,
    },

    length: {
      type: Number, // e.g. number of pages
      min: [1, 'Book length must be at least 1 page'],
    },

    isbn: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },

    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },

    quantity: {
      type: Number,
      default: 1,
      min: [0, 'Quantity cannot be negative'],
    },

    publisher: {
      type: String,
      trim: true,
      default: 'Unknown',
    },

    salePercent: {
      type: Number,
      default: 0,
      min: [0, 'Sale percent cannot be negative'],
      max: [100, 'Sale percent cannot exceed 100'],
    },

    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be at least 0'],
      max: [5, 'Rating cannot exceed 5'],
    },

    isTrending: {
      type: Boolean,
      default: false,
    },

    languages: {
      type: [String],
      default: ['English'],
    },

    reviews: {
      type: [String], // list of text reviews
      default: [],
    },

    totalSold: {
      type: Number,
      default: 0,
      min: [0, 'Total sold cannot be negative'],
    },

    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },

    coverPhoto: {
      type: String, // URL or local path
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Book', bookSchema);
