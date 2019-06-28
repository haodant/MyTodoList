import React, { Component } from 'react';
import Todos from './Todo';
import AddForm from './AddForm';
import { CurrentDate } from './CurrentDate';

class App extends Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos});
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  render() {
    return (
      <div className="App container">
        <CurrentDate />
        <h1 className="center">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
