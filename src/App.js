import React, { Component } from 'react';
import './App.css';
import ColorWindow from './components/colorWindow.js';
import RandomColor from './components/RandomColor.js';
import Guess from './components/Guess.js';
import GuessWindow from './components/GuessWindow.js';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentColor: '',
      guess: '',
      message: 'Click Guess to find out!',
      showCheat: false,
      madeGuess: false
    }
  }

  componentDidMount = () => {
    this.newColor();
  }

  newColor = () => {
    var possibleValues = [ '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    var randomColor = [];
    while(randomColor.length < 6 ) {
      var index = Math.floor(Math.random() * 16);
      randomColor.push(possibleValues[index]);
    }
    this.setState({currentColor:randomColor.join(''),
                          guess: 'Make a Guess!',
                        message: 'Click Guess to find out!',
                        showCheat: false,
                        madeGuess: false
                  });
  }

  cheat = () => {
    console.log(this.state.cheat);
    var toggle = !this.state.showCheat
    this.setState({showCheat:toggle});
  }

  newGuess = (userGuess) => {
    this.setState({guess: userGuess,
               madeGuess: true});
    this.checkGuess();
  }

  checkGuess = () => {
    var failResponses = ['Nope', 'Sucks To Suck', 'Try Again', 'A oneder can do better than this'];

    if(this.state.guess === this.state.currentColor) {
      this.setState({message: 'JK, Congrats you won!'});
    } else {
      var msgIndex = Math.floor(Math.random() * failResponses.length);
      this.setState({message: failResponses[msgIndex]});
    }

  }


  render = () => {
    var styles = {
      'textAlign':'right'
    }

    return (
      <div className="App">

      <div className="Title">
        <h1> Hex Detective </h1>
      </div>
        <ColorWindow hexColor={this.state.currentColor}   />
        <div style={styles}>
          {this.state.showCheat? <h2> Current Color: {this.state.currentColor}</h2> : null}
          <h2>Current Guess: {this.state.guess}</h2>
          <h2>Did you win?: {this.state.message}</h2>
          </div>
        <div>
          <RandomColor changeColor={this.newColor.bind(this)} />
        </div>

        <div>
          <Guess onGuess={this.newGuess.bind(this) } onCheat={this.cheat.bind(this)} />
          {this.state.madeGuess? <GuessWindow guessColor={this.state.guess} /> : null }
        </div>

      </div>
    );
  }
}

export default App;
