import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store/index";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
    // console.log(this.state);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      ></TodoListUI>
    );
  }

  componentDidMount() {
    // axios.get("./list.json").then(() => {});
    setTimeout(() => {
      const data = ["w", "c", "d"];
      const action = initListAction(data);
      console.log(action);
      store.dispatch(action);
    }, 1000);
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
