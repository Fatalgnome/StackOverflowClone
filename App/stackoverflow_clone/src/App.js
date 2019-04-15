import React, { Component } from 'react';
import './App.css';

class App extends Component
{
  API_URL = 'http://localhost:8080';
  constructor(props)
  {
    super(props);

    this.state ={
      questions: []
    };
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


  render() {
    return (
      <div className="App">
        <p>hi</p>
          {console.log("Hi")}
      </div>
    );
  }
}

export default App;
