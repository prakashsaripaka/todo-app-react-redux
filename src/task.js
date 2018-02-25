import React, { Component } from 'react';
import ButtonComponent from './button-component'


class Task extends Component {
	constructor(props) {
    super(props);
   	//this.onDelete = this.onDelete.bind(this);
  }

	onDelete(){
		
	  console.log(this.props.data);
	}

  render() {
  	return (
       <li>
       		{this.props.label} 
       		{/*<button onClick={(evt) => this.props.handleDelete(this.props.data)}>DELETE</button>*/}
          <ButtonComponent label="DELETE" handleClick = {this.props.handleDelete} dataIndex={this.props.data}/>
       	</li>
    );
  }
}

export default Task;
