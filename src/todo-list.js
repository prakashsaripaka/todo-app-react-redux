import React, { Component } from 'react';
import TodoTitle from './todo-title';
import Task from './task';

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {
			todoList : [
			"1 ",
			"2",
			"3"
			]	
		}
		
	}

	deleteListItem(index){
		
		var newList = this.state.todoList.filter((item,i) => {
			console.log(i,index)
			return i !== index;
		})
		console.log(newList)
		this.setState({todoList:newList});
	}
  
  render() {

  	const todoListItems = this.state.todoList.map((item , index) => {
  		return  <Task key={index} data={index} label={item} handleDelete={this.deleteListItem.bind(this)}></Task>
  	})

    return (
      <React.Fragment>
      	<TodoTitle/>
      	<ul>
      		{todoListItems}
      	</ul>
      </React.Fragment>	
    );
  }
}

export default TodoList;
