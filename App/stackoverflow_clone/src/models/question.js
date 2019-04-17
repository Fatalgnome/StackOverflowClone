const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        title: String,
        description: String
    });

const Question = mongoose.model('Question', questionSchema);

export default Question;