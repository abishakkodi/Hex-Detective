const React = require('react');
const _ = require('underscore');

class Guess extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      guess: ''
    }
  }


  validGuess = (string) => {
    var possibleValues = [ '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    if (string.length !== 6) {
      return false;
    }

    var letters = string.split('');

    var valid = _.every(letters, (letter) => {
      return possibleValues.includes(letter);
    });

    return valid;
  }

  render = () => {
    const styles = {
      'textAlign':'right'
    }

    return(
      <div style={styles}>
        <h3 > What is your guess? </h3>
        <form onSubmit={this.handleGuess}>
        <input type='text'  placeholder='Enter Guess Here' value={this.state.guess} onChange={this.handleGuessChange} />
        <input type="submit" value="Guess" />
        </form>

        <form onSubmit={this.handleCheat}>
          <input type="submit" value="Show Answer" />
        </form>
      </div>);
  }

  handleCheat = (e) => {
    e.preventDefault();
    this.props.onCheat()
  }

  handleGuess = (e) => {
    e.preventDefault();

    if (this.validGuess(this.state.guess)) {
        console.log('Validated Correctly');
        this.props.onGuess(this.state.guess);
    } else {
        this.props.onGuess('Not a Valid Guess');
    }
    //this.setState({ value: e.target.value});
  }

  handleGuessChange = (e) => {
    e.preventDefault();
    this.setState({guess: e.target.value});
  }

};


export default Guess;