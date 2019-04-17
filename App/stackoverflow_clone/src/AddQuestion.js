import React, {Component} from 'react';

export default class AddQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputTitle: "",
            inputDescription:""
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
            inputDescription: event.target.value
        });
    }

    handleInput(event) {
        event.preventDefault();
        this.props.addQuestion(this.state.inputTitle, this.state.inputDescription);
        this.setState({
            inputTitle:"",
            inputDescr: ""
        });
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


