var React = require('react');

class RandomColor extends React.Component {
  constructor(props){
    super(props);
  }

render(){
  const divStyle = {
        padding: '40px',
        margin: '40px'

      };
      console.log(this.props.newColor);

  return(<div>
      <button style={divStyle} onClick={this.props.changeColor}> Click Me to Change Color </button>

    </div>)
}


}

export default RandomColor;

