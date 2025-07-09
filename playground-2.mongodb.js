/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'contact';
const collection = 'contactlist';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

use('contact');

// Create collection (optional, MongoDB auto-creates it on insert)
db.createCollection('contactlist');

// Insert documents
db.contactlist.insertMany([
  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { lastName: "Alex", firstName: "brown", age: 4 },
  { lastName: "Denzel", firstName: "Washington", age: 3 }
]);

// Display all contacts
db.contactlist.find().pretty();

// Display contacts with age > 18
db.contactlist.find({ age: { $gt: 18 } }).pretty();

// Display contacts with age > 18 and firstName contains "ah"
db.contactlist.find({
  age: { $gt: 18 },
  firstName: { $regex: "ah", $options: "i" }
}).pretty();

// Update Seif to Anis
db.contactlist.updateOne(
  { lastName: "Kefi", firstName: "Seif" },
  { $set: { firstName: "Anis" } }
);

// Delete contacts with age < 5
db.contactlist.deleteMany({ age: { $lt: 5 } });

// Display all contacts again
db.contactlist.find().pretty();
