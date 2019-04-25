import React, {Component} from 'react';

export default class AddAnswer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputContent:""
        };

        this.onChangeContent = this.onChangeContent.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    onChangeContent(event) {
        this.setState({
            inputContent: event.target.value
        });
    }

    handleInput(event) {
        event.preventDefault();
        this.props.addAnswer(this.props.id, this.state.inputContent);
        this.setState({
            inputContent: ""
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form>
                            <div className="form-group">
                                <label htmlFor="itemDescription">Add Comment</label>
                                <br/>
                                <input type="text" className="form-control" id="itemDescription"
                                       placeholder="Comment"
                                       onChange={this.onChangeContent}/>
                            </div>
                        <button onClick={this.handleInput}
                                type="submit" id="submitItemBtn" className="btn btn-primary">Add Answer
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


