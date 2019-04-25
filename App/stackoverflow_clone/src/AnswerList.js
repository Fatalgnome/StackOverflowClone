import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import AddQuestion from "./AddQuestion";

export default class List extends Component {


    constructor(props){
        super(props);

    }
    render() {
        let items = this.props.answers.map((answer) =>
                <li>
                    <p>{answer.content}</p>
                    <p>{answer.votes}</p>
                </li>);
        return (
            <div>
                <div className="card">
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