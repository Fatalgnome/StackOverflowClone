import React, {Component} from 'react';

export default class Answer extends Component {

    constructor(props)
    {
        super(props);
    }

    handleInputPlus(event)
    {
        event.preventDefault();

    }
    handleInputMinus(event)
    {
        event.preventDefault();

    }
    render() {
        return (
            <li className="list-group-item">
                <button onClick={this.handleInputPlus}
                        type="submit" id="plusVote" className="btn btn-primary">
                    Upvote
                </button>
                <p>Content: {this.props.description}</p>
                <p>Votes: {this.props.votes}</p>
                <button onClick={this.handleInputMinus}
                        type="submit" id="minusVote" className="btn btn-primary">
                    Downvote
                </button>
            </li>
        );
    }
}