import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      str: "",
      strMod: 0,
      dex: "",
      dexMod: 0
    }
  }
  calculateMod = (getNumberEvent) => {
    let value = getNumberEvent.target.value;
    let modifierValue = (value-10)/2;
    this.setState({
      str: value,
      strMod: modifierValue,
    });
  }
  render(){
    return (
      <div>
        <input
          value={this.state.str}
          onChange={this.calculateMod}
        />
        <h1>I should be STR: {this.state.strMod}</h1>
      </div>
    );
  }
}

export default App;
