const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        text: String,
        votes: Number
    });

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;