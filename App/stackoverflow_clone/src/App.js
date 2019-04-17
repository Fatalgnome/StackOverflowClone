import React, { Component } from 'react';
import './App.css';
import AddQuestion from "./AddQuestion";
import List from "./List";

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

  getData()
  {
    console.log("Getting Data");
    //TODO: Get data from API
    fetch(`${this.API_URL}/question`)
        .then((response) =>
        {
          console.log(response);
          return response.json();
        })
        .then((questions) =>
        {
          this.setState(
              {
                  questions: questions
              });
        })
        .catch(error =>
        {
          console.error(error);
        })
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
  render() {
    return (
      <div className="App">
          <h1>Stack Overflow</h1>
          <List questions={this.state.questions}/>
          <h4>Ask question here:</h4>
          <AddQuestion addQuestion={this.addQuestion}/>
      </div>
    );
  }
}

export default App;
