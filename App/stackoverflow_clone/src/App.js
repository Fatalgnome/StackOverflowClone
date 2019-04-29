import React, { Component } from 'react';
import './App.css';
import List from "./List";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Question from "./Question";

class App extends Component
{
    API_URL = process.env.REACT_APP_API_URL;
  constructor(props)
  {
    super(props);

    this.state ={
      questions: []

    };
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.getData = this.getData.bind(this);
  }

    componentDidMount()
    {
    console.log("App component has mounted");
    this.getData();
    }

    getData()
    {
    console.log("Getting Data");
    fetch(`${this.API_URL}/question`)
        .then((response) =>
        {
          console.log(response);
          return response.json();
        })
        .then((questions) =>
        {
            this.setState({
                questions: questions
            });
            console.log(questions);
        })
        .catch(error =>
        {
          console.error(error);
        });
    }

  addQuestion(title, description)
  {
    let newQuestion = {
        title: title,
        description: description
    };
      console.log(JSON.stringify(newQuestion));
      fetch(`${this.API_URL}/question`,
          {
              method: 'POST',
              body: JSON.stringify(newQuestion),
              headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json())
          .then(json =>
          {
              console.log(json);
              console.log(newQuestion);
              this.getData()
          })
  }

  addAnswer(id,comment)
  {
      let newAnswer =
          {
              content: comment
          };
      fetch(`${this.API_URL}/question/comment/${id}`,
          {
              method: 'POST',
              body: JSON.stringify(newAnswer),
              headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json())
          .then(json =>
          {
              console.log(json);
              console.log(newAnswer);
              window.location.reload();
          })
  }

    getQuestionFromId(id)
    {
        return this.state.questions.find((elm) => elm._id === id);
    }
/**/
  render() {
    return (
      <Router>
        <div className="container">
            <Link to={`/`}><h1>Stack Overflow</h1></Link>
            <Switch>
            <Route exact path="/"
                render={(props) => <List {...props}
                                        questions={this.state.questions}
                                        addQuestion={this.addQuestion}/>}
            />

            <Route exact path="/question/:id"
                render={(props) => <Question {...props}
                                             question={this.getQuestionFromId(props.match.params._id)}
                                             id={props.match.params.id}
                                             addAnswer={this.addAnswer}
                />}
            />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
