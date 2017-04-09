// Dependecies
import React, { Component } from 'react';

//import { StaggeredMotion, spring } from 'react-motion';

// Components
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Styling and Assets
//import logo from './logo.svg'
import './App.css';

const todos =[
  {todo: 'Homework', isComplete: false},
  {todo: 'Clean Room', isComplete: true},
  {todo: 'Grocery Shopping', isComplete: false},
  {todo: 'Learn React Motion', isComplete: false},
]

class App extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.state = {
      todos: todos,
      todo: ''
    }
  }

  onSubmit(event){
    event.preventDefault();
    const todos = this.state.todos;
    const newTodo = {
      todo: this.state.todo,
      isComplete: false
    }
    todos.push(newTodo);
    this.setState({
      todos: todos,
      todo: '',
    });
  }

  onChange(event){
    this.setState({
      todo: event.target.value
    })
  }

  removeItem(atIndex){
    const { todos } = this.state;
    todos.splice(atIndex, 1);
    this.setState({
      todos
    })
  }

  completeItem(index){
    const todos = this.state.todos;
    const todo = {
      todo: todos[index].todo,
      isComplete: !todos[index].isComplete
    }
    todos[index] = todo;
    this.setState({
      todos: todos,
      todo:''
    })
  }
  render() {
    return (
      <div className="App">
      <a href="http://github.com/smorm/" target="_blank">
        <img className="App-logo" alt="React Logo" src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'/>
      </a>
      <TodoForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.todo}/>
      <TodoList
        removeItem={this.removeItem}
        completeItem={this.completeItem}
        todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
