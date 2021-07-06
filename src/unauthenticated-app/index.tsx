import { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { Button,Card } from "antd";


export const UnauthenticatedApp = () => {
  const [isReqister, setIsRegister] = useState(false);

  return <div style={{ display: "flex", justifyContent: "center" }}>
    <Card>
      {isReqister ? <RegisterScreen /> : <LoginScreen />}
      <Button onClick={() => setIsRegister(!isReqister)}>切换到{isReqister ? "登录" : "注册"}</Button>
    </Card>
  </div>;
};
