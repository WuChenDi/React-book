import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            style={{ width: "300px", marginRight: "10px" }}
            placeholder="todo info"
          />
          <Button type="primary">Primary</Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={data}
          renderItem={item => <List.Item> {item} </List.Item>}
        />
      </div>
    );
  }
}

export default TodoList;
