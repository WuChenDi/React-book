import React from "react";
import { Input, Button, List } from "antd";

// 无状态组件
const TodoListUI = props => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          value={props.inputValue}
          style={{ width: "300px", marginRight: "10px" }}
          placeholder="todo info"
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleBtnClick}>
          Primary
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={index => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      ></List>
    </div>
  );
};

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ margin: "10px" }}>
//         <div>
//           <Input
//             value={this.props.inputValue}
//             style={{ width: "300px", marginRight: "10px" }}
//             placeholder="todo info"
//             onChange={this.props.handleInputChange}
//           ></Input>
//           <Button type="primary" onClick={this.props.handleBtnClick}>
//             Primary
//           </Button>
//         </div>
//         <List
//           style={{ marginTop: "10px", width: "300px" }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={index => {
//                 this.props.handleItemDelete(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         ></List>
//       </div>
//     );
//   }
// }

export default TodoListUI;
