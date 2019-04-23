/**** External libraries ****/
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

/**** Configuration ****/
const appName = "Stackoverflow";
const port = (process.env.PORT || 8080);
const app = express();
app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console
app.use(express.static(path.join(__dirname, '../build')));

mongoose.connect('mongodb://localhost:27017/Stackoverflow');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'console error:'));
db.once('open', function () {
    console.log('We are connected!');
});

// Additional headers for the response to avoid trigger CORS security
// errors in the browser
// Read more here: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    // intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      // respond with 200
      console.log("Allowing OPTIONS");
      res.send(200);
    }
    else {
      // move on
      next();
    }
});

let answerSchema = new mongoose.Schema(
    {
        content: String,
        votes: Number
    });

let questionSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        answers: [answerSchema]
    });

const Answer = mongoose.model('Answer', answerSchema);
const Question = mongoose.model('Question', questionSchema);

app.get('/question', (req,res) =>
{
    Question.find((er, docs)=>{
        res.send(docs);
    });
});

app.get('/question/:id',(req,res) =>{
    Question.findOne({
        _id: req.params.id}, (err, question) =>{
        if(err) {
            console.log(err);
        }
        else {
        res.json(question)
        }
    })
});


/**** Reroute all unknown requests to the React index.html ****/
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.post('/api/comment/:id', (req,res) =>
{
   let newComment = new Answer({
       content: req.body.content,
       votes: 0
   });

    Question.findOne({
        _id: req.params._id}, (err, question) =>{
        question.answers.push(newComment);
        question.save();
    })
});

app.post('/api/question', (req,res) =>
{
    let newQuestion = new Question({
            title: req.body.title,
            description: req.body.description
    });

    newQuestion.save(function(err, question)
    {
        if(err){return console.log(err);}
        else{console.log("Question Saved", question);}
    });
    res.json({msg: `You have posted this data ${newQuestion}`});
    res.send();

});

/**** Start! ****/
app.listen(port, () => console.log(`${appName} API running on port ${port}!`));




