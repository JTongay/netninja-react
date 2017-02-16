import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

const TodoComponent = React.createClass({
  getInitialState () {
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'booyah fam'],
      age: 30
    }
  },

  render () {
    var ager = setTimeout(()=>{
      this.setState({
        age: 35
      })
    }, 5000)
    var todos = this.state.todos;
    todos = todos.map((item, index)=>{
      return (
        <li key={item.id}>{item}, {index}</li>
      )
    })
    return (
      <div id="todo-list">
        <p>The Busiest People have the most leisure....</p>
        <p>{this.state.age}</p>
        <ul>
          {todos}
        </ul>
      </div>
    )
  } //render
})

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'))

export default TodoComponent
