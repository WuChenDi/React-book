import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content, test } = this.props;
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    );
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // this.props.deleteItem(this.props.index);
    console.log(this.props.index);
  }
}

// 类型检查
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

// 添加默认值props
TodoItem.defaultProps = {
  test: "hello world"
};

export default TodoItem;
