import React from "react";
import { Form, Input, Select } from "antd";

const { Option } = Select;
const { Item } = Form;


export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form layout={"inline"}>
      <Item>
        {/*setParam(Object.assign({}, param, { name: evt.target.value() }));*/}
        <Input
          placeholder={"项目名"}
          type="text"
          value={param.name}
          onChange={evt =>
            setParam({
              ...param,
              name: evt.target.value
            })
          }
        />
      </Item>
      <Item>
        <Select
          value={param.personId}
          onChange={value =>
            setParam({
              ...param,
              personId: value
            })
          }
        >
          <Option value={""}>负责人</Option>
          {users.map(user => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
      </Item>
    </Form>
  );
};
