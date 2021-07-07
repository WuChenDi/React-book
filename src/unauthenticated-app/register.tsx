import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "./index";

const { Item } = Form;

export const RegisterScreen = () => {
  const { register, user } = useAuth();

  const handleSubmit = (values: { username: string, password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Item name={"username"} rules={[{ required: true, message: "请输入用户名" }]}>
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Item>
      <Item name={"password"} rules={[{ required: true, message: "请输入密码" }]}>
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Item>
      <Item>
        <LongButton htmlType={"submit"} type={"primary"}>注册</LongButton>
      </Item>
    </Form>
  );
};
