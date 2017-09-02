const React = require('react');

class ColorWindow extends React.Component{

  render = () => {
    var color = '#' + this.props.hexColor;
    const divStyle = {
        background: color,
        margin: 'auto',

      };

    return(
      <div style={divStyle} className='hexagon'>

      </div>

      );
  }
};


export default ColorWindow;