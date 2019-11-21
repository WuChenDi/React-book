import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("child render");
    const { content, test } = this.props;
    // JSX -> createElement -> 虚拟DOM(JS对象) -> 真实的DOM
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    );

    // return <div><span>item</span></div>
    // return React.createElement(
    //   "div",
    //   {},
    //   React.createElement("span", {}, "item")
    // );
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index);
    console.log(this.props.index);
  }

  // 一个组件要从父组件接受参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }

  // 但这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
}

// 类型检查
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

// 添加默认值props
TodoItem.defaultProps = {
  test: "hello world"
};

export default TodoItem;
