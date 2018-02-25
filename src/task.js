import React, { Component } from 'react';
import ButtonComponent from './button-component'


class Task extends Component {
	constructor(props) {
    super(props);
   	this.state = {
      complete:false
    }
  }

	onDelete(){
		
	  console.log(this.props.data);
	}

  completeListTask(){
    this.setState ({
      complete:!this.state.complete
    })
  }

  strickThrough(){
    return (this.state.complete)?"complete-task":"";
  }

  changeBtnLabel(){
    return (this.state.complete)?"UNDO":"COMPLETE";
  }

  render() {
  	return (
       <li>
       		<span className={this.strickThrough()} >{this.props.label}</span> 
       		{/*<button onClick={(evt) => this.props.handleDelete(this.props.data)}>DELETE</button>*/}
          <ButtonComponent label="DELETE" handleClick = {this.props.handleDelete} dataIndex={this.props.data}/>
          <ButtonComponent label={this.changeBtnLabel()} handleClick = {() => {this.completeListTask()}} dataIndex={this.props.data}/>
       	</li>
    );
  }
}

export default Task;
