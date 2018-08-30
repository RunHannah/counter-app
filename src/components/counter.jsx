import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    // tags: ["tag1", "tag2", "tag3"]
  };

  //to bind event handlers, long way
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // use this to bind event handler and change state
  handleIncrement = product => {
    console.log("product :", product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
