const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// DB Config
async function connectToMongoDB() {
    try {
      await mongoose.connect('mongodb+srv://adkumar7112:ok@cluster0.t1lmeuo.mongodb.net/');
      console.log('MongoDB Connected');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err.message);
    }
  }
  
  connectToMongoDB();
  
  
// Product Model
const Product = mongoose.model('Product', {
  name: String,
  price: Number
});

// Example API Route using async/await
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example API Route using async/await
app.post('/api/products', async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = new Product({ name, price });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
