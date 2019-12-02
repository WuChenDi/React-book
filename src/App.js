import React, { fragment } from "react";
import { GlobalStyled } from "./style.js";

import Header from "./common/header/index";

function App() {
  return (
    <fragment>
      <Header />
      <GlobalStyled />
    </fragment>

    // <div className="App">
    //   hello world
    // </div>
  );
}

export default App;
