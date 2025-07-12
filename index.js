const express = require('express');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 4000; // Changed the port to 4000
const MONGO_URI = 'mongodb://localhost:27017'; // Updated to use a local MongoDB connection

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
let db;
MongoClient.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        console.log('Connected to MongoDB');
        db = client.db('sample_mflix');
    })
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});