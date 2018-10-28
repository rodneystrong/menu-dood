import React from 'react';

export default class Zach extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lel: 'thats really stupid i could do it faster',
      count: props.initialCount,
    };
  }
  render() {
    return (
      <div>
        <p>Item count: {this.state.count}</p>
        <p>{this.state.lel}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Fuck ReactJS
        </button>
      </div>
    );
  }
}
