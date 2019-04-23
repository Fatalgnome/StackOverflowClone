import React, {Component} from 'react';
import Question from "./Question";

import {Link} from "react-router-dom";

export default class List extends Component {


    constructor(props){
        super(props);

    }
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
                    <div className="card-header">
                        The list
                    </div>
                    <div className="card-body">
                        <ul className="list-group" id="itemList">
                            {items}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}