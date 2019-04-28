import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import AddQuestion from "./AddQuestion";
import Answer from "./Answer";

export default class List extends Component {


    constructor(props){
        super(props);

    }
    render() {
        let answerList = [];

        if(this.props.answers)
        {
            console.log("We in boys");
            this.props.answers.forEach((answer) => {
                console.log("hi");
                answerList.push(
                <li>
                    <Answer description={answer.content} votes={answer.votes} /><br/>
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