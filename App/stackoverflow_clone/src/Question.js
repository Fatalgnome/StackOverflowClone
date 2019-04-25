import React, {Component} from 'react';
import Answer from "./Answer";

class Question extends Component {

    API_URL = 'http://localhost:8080';
    constructor(props)
    {
        super(props);

        this.state=
            {
                question: ""
            };

        fetch(`${this.API_URL}/question/${props.match.params.id}`)
            .then((response) =>
            {
                console.log(response);
                return response.json();
            })
            .then((questions) =>
            {
                this.setState({
                    question: questions
                });
                console.log(questions + "foiaoifjaiefoijaoefij");
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
                            <p>Description: {this.state.question.description}</p>
                        </div>
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