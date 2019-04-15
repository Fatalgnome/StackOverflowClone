import React, {Component} from 'react';

export default class AddQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputTitle: "",
            inputDescr:""
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

    onChangeDescription(event) {
        this.setState({
            inputDescr: event.target.value
        });
    }

    handleInput(event) {
        event.preventDefault();
        this.props.addQuestion(this.state.inputTitle, this.state.inputDescr);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="itemTitle"
                                   placeholder="Title"
                                   onChange={this.onChangeTitle}
                            />
                            <br/>
                            <div className="form-group">
                                <label htmlFor="itemDescription">Question Description</label>
                                <br/>
                                <input type="text" className="form-control" id="itemDescription"
                                       placeholder="Description"
                                       onChange={this.onChangeDescription}/>
                            </div>
                        </div>
                        <button onClick={this.handleInput}
                                type="submit" id="submitItemBtn" className="btn btn-primary">Add Question
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


