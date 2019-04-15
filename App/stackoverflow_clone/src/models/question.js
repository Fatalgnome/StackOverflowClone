import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        votes: Number
    });

const Question = mongoose.model('Question', questionSchema);

export default Question;