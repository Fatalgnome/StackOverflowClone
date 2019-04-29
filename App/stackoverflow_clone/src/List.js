import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AddQuestion from "./AddQuestion";

export default class List extends Component {


    render() {
        let items = this.props.questions.map((question) =>
            <Link to={`/question/${question._id}`}>
                <li>
                    <p>{question.title}</p>
                </li>
            </Link>);
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group" id="itemList">
                            {items}
                        </ul>
                    </div>
                </div>
                <h4>Ask question here:</h4>
                <AddQuestion addQuestion={this.props.addQuestion}/>
            </div>

        );
    }
}