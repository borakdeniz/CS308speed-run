import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageURL: { type: String },
    images: [String],
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    distributor: { type: String, required: true },
    comments: { type: Array },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
    slug: { type: String, required: true, unique: true },
    numReviews: { type: Number },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
