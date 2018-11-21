const React = require('react');

class CustomComponent extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    const { opened }  = this.state;
    return (
      <div className="sliderContainer">
      {/* <img  className="controls" src="static/images/control.png" /> */}
      <div onClick={() => this.setState({opened: !opened})} className="button">Controls</div>
        <div style={{opacity: opened ? 1 : 0, pointerEvents: opened ? 'all' : 'none'}} >
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = CustomComponent;
