import { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";

export const UnauthenticatedApp = () => {
  const [isReqister, setIsRegister] = useState(false);

  return <div>
    {isReqister ? <RegisterScreen /> : <LoginScreen />}
    <button onClick={() => setIsRegister(!isReqister)}>切换到{isReqister ? "登录" : "注册"}</button>
  </div>;
};
