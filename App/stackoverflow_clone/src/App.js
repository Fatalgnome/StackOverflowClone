import React, { Component } from 'react';
import './App.css';
import AddQuestion from "./AddQuestion";

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
        description: description,
        votes: 0
    };

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
  render() {
    return (
      <div className="App">
          <h1>Stack Overflow</h1>
          <h4>Ask question here:</h4>
          <br/>
          <AddQuestion />
      </div>
    );
  }
}

export default App;
