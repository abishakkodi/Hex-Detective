import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorWindow from './components/colorWindow.js';
import RandomColor from './components/RandomColor.js';



class App extends Component {


  constructor(props){
    super(props);


    this.state = {
      currentColor: '666666'
    }

  }

  newColor() {
    var possibleValues = [ '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    var randomColor = [];

    while(randomColor.length < 6 ) {
      var index = Math.floor(Math.random() * 16);
      randomColor.push(possibleValues[index]);
    }

    console.log(randomColor);
    this.setState({currentColor:randomColor.join('')});
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Hex Detective</h2>
        </div>


        <ColorWindow hexColor={this.state.currentColor}   />


        <div>
          <RandomColor changeColor={this.newColor.bind(this)}/>
        </div>

      </div>
    );
  }
}

export default App;
