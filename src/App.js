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
     <div>
       <span>Enter your {this.props.name} stat: </span>
        <input
          value={this.state.stat}
          onChange={this.calculateMod}
       />
      </div>
      <span><Modifier name={this.props.name} mod={this.state.mod} ></Modifier></span>
    </div>
    );
  }
}
function Modifier(props){
  return(
      <h2>{props.name} Modifier is: {props.mod}</h2>
  )
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
        <div className="heading" id="heading">
          {displayInformation}
        </div>  
        <div className="modifiers" id ="modifiers">

        </div>
      </div>
    );
  }
}

export default App;
