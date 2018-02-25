import React, { Component } from 'react';


class ButtonComponent extends Component {
  render() {
  	
    return (
    	
      <button onClick = {(evt) => this.props.handleClick(this.props.dataIndex)}>{this.props.label}</button>

    
    );
  }
}

export default ButtonComponent;
