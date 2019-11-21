import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import "./Cartoon.css";

class Cartoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    return (
      <Fragment>
        <CSSTransition>
          <div className={this.state.show ? "show" : "hide"}>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }

  handleToggle() {
    this.setState(() => ({
      show: !this.state.show
    }));
  }
}

export default Cartoon;
