import React, {Component} from 'react';
import Answer from "./Answer";

export default class List extends Component {
    render() {
        let answerList = [];

        if(this.props.answers)
        {
            this.props.answers.forEach((answer) => {
                answerList.push(
                <li>
                    <Answer description={answer.content}
                            votes={answer.votes}
                            questionId={this.props.id}
                            answerId={answer._id}/><br/>
                </li>)
            });
        }
        console.log(answerList, "Answerlist, Answerlist");
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group" id="itemList">
                            {answerList}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}