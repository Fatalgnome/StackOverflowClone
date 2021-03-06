import React, {Component} from 'react';
import AnswerList from "./AnswerList";
import AddAnswer from "./AddAnswer";

class Question extends Component {

    API_URL = process.env.REACT_APP_API_URL;
    constructor(props)
    {
        super(props);

        this.state=
            {
                question: "",
                answer: ""
            };

        fetch(`${this.API_URL}/question/${props.match.params.id}`)
            .then((response) =>
            {
                console.log(response);
                return response.json();
            })
            .then((questions, answer) =>
            {
                this.setState({
                    question: questions,
                    answer: answer
                });
            })
            .catch(error =>
            {
                console.error(error);
            });
    }


    render() {
        let content = "LOAD";
        if(this.state.question)
        {
                let question = this.state.question;
                console.log(question);
                content =
                    <div>
                        <div className="questionBoks">
                            <h3>{this.state.question.title}</h3>
                            <p>Question: {this.state.question.description}</p>
                        </div>
                        <AddAnswer id={this.props.id}
                                   addAnswer={this.props.addAnswer}/>

                        <AnswerList answers={this.state.question.answers}
                                    id={this.props.id}/>

                    </div>;
            }
            return content;
        }
        /*return (
            <div>
                <h2>{this.props.title}</h2>
                <p>Description: {this.props.description}</p>
                {/<!--Post answers here, after for loop-->/}
            </div>
        );*/
}
export default Question;