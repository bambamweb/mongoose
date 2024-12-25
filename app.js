require('dotenv').config();  // Ensure environment variables are loaded
const mongoose = require('mongoose');
const uri = require('./uri');  // Import the URI from the uri.js file

// Connect to MongoDB using Mongoose
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB using Mongoose!');
    // Now you can perform CRUD operations using Mongoose
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
