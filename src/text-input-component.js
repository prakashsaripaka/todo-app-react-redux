import React, { Component } from 'react';


class TextInput extends Component {
	constructor(props){
		super(props);
		
		/*this.state = {
			textInput:""
		}*/

	}

 /*handleChange(e){
 	this.setState ({
 		textInput:e.target.value
 	})
 }*/

  render() {
  	
    return (
    	
      <input type="text" name="todoText" onChange = {(e) => this.props.handleTaskInput(e)} />

    
    );
  }
}

export default TextInput;
