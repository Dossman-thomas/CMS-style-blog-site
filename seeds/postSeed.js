// This code was written w/the help of Open Ai's ChatGPT 3.5
// import the Post model from the "../models" directory
const { Post } = require('../models');

const posts = [
  {
    title: 'Introduction to JavaScript',
    content: 'JavaScript is a versatile programming language...',
    user_id: 1, // Assuming user with id 1 exists
  },
  {
    title: 'React.js Fundamentals',
    content: 'React.js is a JavaScript library for building user interfaces...',
    user_id: 2, // Assuming user with id 2 exists
  },
  {
    title: 'Node.js Backend Development',
    content: 'Node.js is a JavaScript runtime for building scalable network applications...',
    user_id: 3, // Assuming user with id 3 exists
  },
  {
    title: 'Python for Data Science',
    content: 'Python is widely used for data science and machine learning...',
    user_id: 3, // Assuming user with id 4 exists
  },
];

// define a function that inserts multiple records into the 'posts' table based on the data in the 'posts' array above
const seedPostData = () => Post.bulkCreate(posts);

module.exports = seedPostData;
