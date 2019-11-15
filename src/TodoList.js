import React, { Component, Fragment } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "hello",
            list: []
        };
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>vue</li>
                    <li>react</li>
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        // console.log(this);
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        });
    }
}

export default TodoList;
