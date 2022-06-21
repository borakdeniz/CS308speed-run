import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    imageURL: { type: String },
    edition: { type: String, required: true },
    description: { type: String, required: true },
    genres: { type: Array, required: true },
    price: { type: Number, required: true },
    distributor: { type: String, required: true },
    comments: { type: Array, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
    slug: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
