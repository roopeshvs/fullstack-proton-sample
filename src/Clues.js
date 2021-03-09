import React, { Component } from "react";

class Clue extends Component {
  render() {
    let clues = this.props.hints
    return (
        <div>
            {clues.map((val, index) => <p key={index}> {val} </p>)}
        </div>
    );
  }
}

export default Clue;
