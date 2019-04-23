import React, {Component} from 'react';

export default class AddAnswer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputContent:""
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.handleInput = this.handleInput.bind(this);
    }

    onChangeTitle(event) {
        this.setState({
            inputTitle: event.target.value
        });
    }

    onChangeContent(event) {
        this.setState({
            inputContent: event.target.value
        });
    }

    handleInput(event) {
        event.preventDefault();
        this.props.addQuestion(this.state.inputTitle, this.state.inputContent);
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
                                <label htmlFor="itemDescription">Question Description</label>
                                <br/>
                                <input type="text" className="form-control" id="itemDescription"
                                       placeholder="Description"
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


