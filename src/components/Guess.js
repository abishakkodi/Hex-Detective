const React = require('react');

class Guess extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      guess: ''
    }
  }

  handleGuessChange = (e) => {
    e.preventDefault();
    this.setState({guess: e.target.value});
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
      </div>

      )
  }
  handleCheat = (e) => {
    e.preventDefault();
    this.props.onCheat()
  }

  handleGuess = (e) => {
    e.preventDefault();
    this.props.onGuess(this.state.guess);
    //this.setState({ value: e.target.value});
  }

};


export default Guess;