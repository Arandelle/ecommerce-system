const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5173;
const uri = process.env.MONGO_URI;

// Configure CORS with specific options
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true
}));
app.use(express.json());

async function startServer() {
  try {
    const client = await MongoClient.connect(uri);
    console.log('Connected to MongoDB successfully');

    const collection = client.db("ecommerce-system").collection("products");

    // Test route to verify server is responding
    app.get('/test', (req, res) => {
      res.json({ message: 'Server is running' });
    });

    // GET route to fetch all products
    app.get('/api/products', async (req, res) => {
      try {
        const products = await collection.find({}).toArray();
        console.log('Sending products:', products); // Debug log
        res.json(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products' });
      }
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

startServer();