import mongoose from 'mongoose';

import Question from './question';
import Comment from './comment';

const DATABASE_URL = 'mongodb:localhost:27017/StackOverflow';

const connectDb = mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'console error'));
db.once('open', function () {
    console.log('We are connected')
});

const models = {Question, Comment};

export {connectDb};

export default models;