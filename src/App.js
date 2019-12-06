import React, { Component } from "react";
import { Provider } from "react-redux";
import { GlobalStyled } from "./style.js";
import { GlobalIcon } from "./statics/iconfont/iconfont";
import Header from "./common/header/index";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <GlobalStyled></GlobalStyled>
        <GlobalIcon></GlobalIcon>
      </Provider>
    );
  }
}

// function App() {
//   return (
//     <Fragment>
//       <Header />
//       <GlobalStyled></GlobalStyled>
//       <GlobalIcon></GlobalIcon>
//     </Fragment>

//     // <div className="App">
//     //   hello world
//     // </div>
//   );
// }

export default App;
