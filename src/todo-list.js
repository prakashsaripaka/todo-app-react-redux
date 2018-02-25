import React, { Component } from 'react';
import TodoTitle from './todo-title';
import Task from './task';
import TextInput from './text-input-component'
import ButtonComponent from './button-component'

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {
			todoList : [
			
			],
			todoTask:""
		}
		
	}

	deleteListItem(index){
		
		var newList = this.state.todoList.filter((item,i) => {
			return i !== index;
		})
		
		this.setState({todoList:newList});
	}

	

	handleTaskInput(e){
		this.setState ({
 		todoTask:e.target.value
 		})
	}

	handleAddTask(){
		
		var newTaskArray = this.state.todoList//.push(this.state.todoTask)
			newTaskArray.push(this.state.todoTask)
		this.setState ({
 			todoList:newTaskArray,
 			todoTask:""
 		})
	}
  
  render() {
   
  	const todoListItems = this.state.todoList.map((item , index) => {
  		return  <Task key={index} data={index} label={item} handleDelete={this.deleteListItem.bind(this)}></Task>
  	})

    return (
      <React.Fragment>
      	<TodoTitle/>
      	<TextInput todoTask={this.state.todoTask} handleTaskInput={(e) => {this.handleTaskInput(e)}}/>
      	<ButtonComponent label="ADD TASK" handleClick={() => this.handleAddTask()}/>
      	<ul>
      		{todoListItems}
      	</ul>
      </React.Fragment>	
    );
  }
}

export default TodoList;
