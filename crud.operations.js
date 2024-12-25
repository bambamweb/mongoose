// crud.operations.js
const Person = require('./Person.model'); // Import the Person model
const mongoose = require('mongoose'); // Import mongoose to handle ObjectIds

// Function to create and find people
async function createAndFindPeople() {
  try {
    // Create people
    const people = [
      { name: 'Alice', age: 25, favoriteFoods: ['Pizza', 'Burger'] },
      { name: 'Bob', age: 35, favoriteFoods: ['Pasta', 'Steak'] },
      { name: 'Charlie', age: 28, favoriteFoods: ['Sushi', 'Tacos'] },
    ];

    // Create the people in the database
    const createdPeople = await Person.create(people);
    console.log('People created:', createdPeople);

    // Find people by name
    const peopleByName = await Person.find({ name: 'Alice' });
    if (peopleByName.length > 0) {
      console.log('People found by name Alice:', peopleByName);
    } else {
      console.log('No people found with the name Alice');
    }

    // Find a person by favorite food
    const personByFood = await Person.findOne({ favoriteFoods: 'Pizza' });
    if (personByFood) {
      console.log('Person found who likes Pizza:', personByFood);
    } else {
      console.log('No person found who likes Pizza');
    }

    // Find a person by ID (replace with an actual ID from your database)
    const personId = '603d8f62bc58d51b4c4d5e7a'; // Replace with a valid ID from your database
    if (mongoose.Types.ObjectId.isValid(personId)) {
      const personById = await Person.findById(personId);
      if (personById) {
        console.log('Person found by ID:', personById);
      } else {
        console.log('No person found with the given ID');
      }
    } else {
      console.log('Invalid ID format');
    }
  } catch (err) {
    console.error('Error during database operations:', err);
  }
}

// Call the function to execute CRUD operations
createAndFindPeople();

module.exports = createAndFindPeople;

// Update a person's age by their name
const updatePersonAge = async (name, newAge) => {
    try {
      const updatedPerson = await Person.findOneAndUpdate(
        { name: name },
        { $set: { age: newAge } },
        { new: true }  // Ensures the updated document is returned
      );
      console.log('Updated person:', updatedPerson);
    } catch (err) {
      console.error('Error updating person:', err);
    }
  };
  
  // Example usage
  updatePersonAge('Alice', 26);
  
  // Delete a person by their ID
const deletePersonById = async (personId) => {
    try {
      const deletedPerson = await Person.findByIdAndRemove(personId);
      console.log('Deleted person:', deletedPerson);
    } catch (err) {
      console.error('Error deleting person:', err);
    }
  };
  
  // Example usage
  deletePersonById('603d8f62bc58d51b4c4d5e7a');
  