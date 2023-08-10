const Comment = require('../models/Comment'); // Assuming you have a Comment model

exports.createComment = async (req, res) => {
  try {
    const { blogId, commentText } = req.body;
    const newComment = new Comment({ blogId, commentText });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getComments = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const comments = await Comment.find({ blogId });
    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};