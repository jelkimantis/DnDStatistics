import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stat: "",
      mod: ""
    };
  }
  calculateMod = (getNumberEvent) => {
    let value = getNumberEvent.target.value;
    let modifierValue = (value-10)/2;
    this.setState({
      stat: value,
      mod: modifierValue,
      name: this.props.name
    });
  }
  render(){
    return(
    <div>
      <input
      value={this.state.stat}
      onChange={this.calculateMod}
      />
      <h1>I should be {this.props.name}: {this.state.mod}</h1>
    </div>
    );
  }
}

class App extends React.Component {
  
  render(){
    return (
      <div>
        <Stats name="STR" />
        <Stats name="DEX" />
        <Stats name="CON" />
        <Stats name="INT" />
        <Stats name="CHA" />
        <Stats name="WIS" />
      </div>
    );
  }
}

export default App;
