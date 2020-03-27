import React, { Component } from 'react';

// components
import Add from './components/Add'
import List from './components/List'
import Blank from './components/blank'

class App extends Component {

  state = {
    todos: JSON.parse(localStorage.getItem("todos"))
  }

  addTodo = (todo) => {
    
    let todos = [...this.state.todos, todo]

    // add to local storage
    localStorage.setItem("todos", JSON.stringify(todos))

    this.setState({
      todos: todos
    })    
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    // Update todos in local storage
    localStorage.setItem("todos", JSON.stringify(todos))
    this.setState({
      todos: todos
    })
  }

  updateDoneState = (id) => {
    console.log(this.state.todos[id])
  }

  render() {

    let compToRender ;
    if(this.state.todos.length > 0) compToRender = <List todos={ this.state.todos } deleteTodo={ this.deleteTodo } updateDoneState={ this.updateDoneState} />
    else compToRender = <Blank />
    return (
     
      <div className="container App">
        <h1 className="text-center mt-4">To Dos</h1>
        <Add todos={ this.state.todos } addTodo={ this.addTodo }/>
        
        { compToRender }

      </div>
    );
  }
}

export default App;
