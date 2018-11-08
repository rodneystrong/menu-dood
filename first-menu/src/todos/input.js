import React from 'react';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      bleh: '',
    };
  }
  render() {
    let { bleh } = this.state;
    //const valueID = this.refs.valueID.value;
    //console.log(`this is ${bleh}`);
    if ({ bleh }) {
      //console.log(`true dat ${bleh}`);
    }
    return (
      <div>
        <form>
          <input
            placeholder="this is it"
            ref="valueID"
            onChange={e => {
              e.preventDefault();
              console.log(this.refs.valueID.value);
              this.setState({
                bleh: e.target.value,
              });
            }}
            //onkeydown happens before onchange.
            // now work on making the Todo items permanent using localstorage. hit enter, make it add to an array. map over the array and render each one.
          />
          <input type="submit" value="you can click me" />
        </form>
        <div>{bleh}</div>
      </div>
    );
  }
}
