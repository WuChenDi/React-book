import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "./index";

const { Item } = Form;


export const LoginScreen = () => {
  const { login, user } = useAuth();

  const handleSubmit = (values: { username: string, password: string }) => {
    login(values);
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
        <LongButton htmlType={"submit"} type={"primary"}>登录</LongButton>
      </Item>
    </Form>
  );
};
