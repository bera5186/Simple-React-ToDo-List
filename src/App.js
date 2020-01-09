import React, { Component } from 'react';
import Add from './components/Add'
import List from './components/List'


class App extends Component {

  state = {
    todos: [
      
    ]
  }

  addTodo = (todo) => {
    //console.log(todo)
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })

  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="container App">
        <h1 className="text-center mt-4">Simple To-Do List</h1>
        <Add todos={ this.state.todos } addTodo={ this.addTodo }/>
        <List  todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
      </div>
    );
  }
}

export default App;
