// This code was written w/the help of Open Ai's ChatGPT 3.5
// import the User model from the "../models" directory
const { User } = require('../models');

const users = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password1',
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'password2',
  },
  {
    username: 'bob_jenkins',
    email: 'bob@example.com',
    password: 'password3',
  },
  {
    username: 'alice_jackson',
    email: 'alice@example.com',
    password: 'password4',
  },
  {
    username: 'emma_white',
    email: 'emma@example.com',
    password: 'password6',
  },
];

// Define a function that inserts multiple records into the 'users' table based on the data in the 'users' array above
const seedUserData = () => User.bulkCreate(users);

module.exports = seedUserData;
