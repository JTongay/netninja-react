import React, { PropTypes } from 'react'

//Import css
require('./css/todoitem.css')

const TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}> X </span>
        </div>
      </li>
    )
  },

  //custom functions
  handleDelete: function(){
    this.props.onDelete(this.props.item)
  }
})

export default TodoItem
