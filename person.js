// person.js
const mongoose = require('mongoose');

// Define the schema for a Person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  age: {
    type: Number,
    required: true, // Age is required
  },
  favoriteFoods: {
    type: [String], // Array of strings for favorite foods
    required: true, // Favorite foods are required
  },
});

// Export the schema to be used in other files
module.exports = personSchema;
