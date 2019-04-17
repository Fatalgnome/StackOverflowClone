import React, {Component} from 'react';
import Question from "./Question";

export default class List extends Component {

    render() {
        let items = this.props.questions.map((question) =>
            <Question   title={question.title}
                        description={question.description}
            />);

        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        The list
                    </div>
                    <div className="card-body">
                        <ol className="list-group" id="itemList">
                            {items}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}