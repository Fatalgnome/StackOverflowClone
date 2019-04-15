import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        text: String
    });

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;