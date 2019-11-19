import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
// import Test from "./Test";
import "./index.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 在组件即将被挂载到页面的时刻自动执行
  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
  }

  render() {
    console.log("render");
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul>
        {/* <Test content={this.state.inputValue}></Test> */}
      </Fragment>
    );
  }

  // 组件被挂载到页面之后，自动被执行
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 组件被更新之前，他会自动被执行
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true; // 返回布尔值是否更新
  }

  // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后
  // 如果shouldComponentUpdate返回true它才执行
  // 如果返回false，这个函数就不会被执行
  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate");
  }

  // 组件更新完成之后，他会被执行
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("UNSAFE_componentWillReceiveProps");
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
          {/*<li
          key={index}
          onClick={this.handleItemDelete.bind(this, index)}
          dangerouslySetInnerHTML={{ __html: item }}
        >
        </li>*/}
        </div>
      );
    });
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // });

    console.log(this.input.value);

    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    if (this.state.inputValue.trim() === "") {
      alert("请输入内容");
      return;
    }

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });

    this.setState(
      prevState => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }),
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list
    // });
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
