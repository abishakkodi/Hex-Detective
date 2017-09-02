const React = require('react');

class GuessWindow extends React.Component {

  render = () => {
    var color = '#' + this.props.guessColor;
    const divStyle = {
        background: color
      };


    return(

      <div className='guessWindow' style={divStyle}>
      </div>

      )
  }


}

export default GuessWindow;