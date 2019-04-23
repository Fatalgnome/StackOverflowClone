import React, {Component} from 'react';

export default class Answer extends Component {

    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                <p>Title: {this.props.title}</p>
                <p>Description: {this.props.description}</p>
            </li>
        );
    }
}