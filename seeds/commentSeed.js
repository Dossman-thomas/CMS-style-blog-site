// This code was written w/the help of Open Ai's ChatGPT 3.5
// import the Comment model from the "../models" directory
const { Comment } = require('../models');

const comments = [
  {
    content: 'This is a great post!',
    user_id: 1,
    post_id: 1,
  },
  {
    content: 'Nice insights! Thanks for sharing.',
    user_id: 2,
    post_id: 2,
  },
  {
    content: 'I have a question about this topic...',
    user_id: 3,
    post_id: 1,
  },
  {
    content: 'Well written. Looking forward to more!',
    user_id: 4,
    post_id: 3,
  },
  {
    content: 'I completely agree with your perspective.',
    user_id: 5, 
    post_id: 2, 
  },
  {
    content: 'Interesting topic. Can you elaborate on...?',
    user_id: 5, 
    post_id: 3, 
  },
];

// Define a function that inserts multiple records into the 'comments' table based on the data in the 'comments' array above
const seedCommentData = () => Comment.bulkCreate(comments);

module.exports = seedCommentData;
