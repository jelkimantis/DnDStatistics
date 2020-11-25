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
      mod: modifierValue
    });
  }
  render(){
    return(
    <div>
      <input
      value={this.state.stat}
      onChange={this.calculateMod}
      />
      <h2>{this.props.name} Modifier: {this.state.mod}</h2>
    </div>
    );
  }
}

class App extends React.Component {
  
  render(){
    let statistics = ["STR", "DEX", "CON", "INT", "CHA", "WIS"];
    let displayInformation = []
    for (const stat in statistics){
      displayInformation.push(<Stats name={statistics[stat]}/>)

    }
    return (
      <div>
        {displayInformation}
      </div>
    );
  }
}

export default App;
