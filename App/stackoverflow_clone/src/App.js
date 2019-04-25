import React, { Component } from 'react';
import './App.css';
import List from "./List";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Question from "./Question";

class App extends Component
{
  API_URL = 'http://localhost:8080';
  constructor(props)
  {
    super(props);

    this.state ={
      questions: []

    };
    this.addQuestion = this.addQuestion.bind(this);
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
    console.log(newQuestion);
      console.log(JSON.stringify(newQuestion));
      fetch(`${this.API_URL}/api/question`,
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
                                             id={props.match.params.id}/>}
            />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
