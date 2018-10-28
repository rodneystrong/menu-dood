import React from 'react';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      bleh: 'i got it',
    };
  }
  render() {
    return <input value={this.state.bleh} />;
  }
}
