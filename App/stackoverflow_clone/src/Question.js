import React, {Component} from 'react';

export default class Question extends Component {


    render() {
        return (
            <li className="list-group-item">
                <label htmlFor={this.props.item.id}>{this.props.item.title}</label>
                <label htmlFor={this.props.item.id}>{this.props.item.description}</label>
            </li>
        );
    }
}