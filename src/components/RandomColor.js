const React = require('react');

class RandomColor extends React.Component {

render(){
  const divStyle = {
        padding: '40px',
        margin: '40px',
        float: 'right'

      };
      console.log(this.props.newColor);

  return(<div>


    <div>
      <button style={divStyle} onClick={this.props.changeColor}> Click Me to Change Color </button>
    </div>


    </div>);
}


}

export default RandomColor;

