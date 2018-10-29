import React from 'react';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      bleh: 'i got it',
    };
  }
  render() {
    return (
      <input
        value={this.state.bleh}
        onChange={event => {
          this.setState({
            bleh: event.target.value,
          });
        }}
        onClick={e => {
          this.setState({
            bleh: '',
          });
        }}
      />
    );
  }
}
