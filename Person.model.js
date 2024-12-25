// Person.model.js
const mongoose = require('mongoose');
const personSchema = require('./person'); // Import the person schema

// Create a model using the schema
const Person = mongoose.model('Person', personSchema);

// Export the model to be used in other files
module.exports = Person;
