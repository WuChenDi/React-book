import React, { useEffect } from "react";
import logo from "src/logo.svg";

export const Demo = () => {
  useEffect(() => {
    console.log(123);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-log" alt="logo" />
      </header>
    </div>
  );
};
