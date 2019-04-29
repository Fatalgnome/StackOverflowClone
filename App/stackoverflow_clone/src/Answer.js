import React, {Component} from 'react';

export default class Answer extends Component {
    API_URL = process.env.REACT_APP_API_URL;

    constructor(props)
    {
        super(props);

        this.handleInputPlus = this.handleInputPlus.bind(this);
        this.handleInputMinus = this.handleInputMinus.bind(this);
    }
    handleInputPlus(event)
    {
        event.preventDefault();
        fetch(`${this.API_URL}/question/${this.props.questionId}/comment/${event.target.className}`,
        {
        method: 'PUT',
        body: JSON.stringify(
        {
            votes: this.props.votes + 1
            }),
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'}
        })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error))
    }

    handleInputMinus(event)
    {
        event.preventDefault();
        fetch(`${this.API_URL}/question/${this.props.questionId}/comment/${event.target.className}`,
            {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        votes: this.props.votes - 1
                    }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'}
            })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <li className="list-group-item">
                <button onClick={this.handleInputPlus}
                        type="submit" id="plusVote" className={this.props.answerId}>
                    Upvote
                </button>
                <p>Content: {this.props.description}</p>
                <p>Votes: {this.props.votes}</p>
                <button onClick={this.handleInputMinus}
                        type="submit" id="minusVote" className={this.props.answerId}>
                    Downvote
                </button>
            </li>
        );
    }
}