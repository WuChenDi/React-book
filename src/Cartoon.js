import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Cartoon.css";

class Cartoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <div className={this.state.show ? "show" : "hide"}>hello</div> */}
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = "blue";
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }

  handleAddItem() {
    this.setState(prevState => ({
      // show: !this.state.show
      list: [...prevState.list, "item"]
    }));
  }
}

export default Cartoon;
