import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

const TodoComponent = React.createClass({
  render () {
    return (
      <div>
        <p><strong>Cheese Name:</strong> {this.props.cheese.name}</p>
        <p><strong>Cheese Smell Factor:</strong> {this.props.cheese.smellFactor}</p>
        <p><strong>Cheese Price:</strong> {this.props.cheese.price}</p>

      </div>
    )
  }
})

const myCheese = {
  name: 'Gouda',
  smellFactor: 'Extreme pong',
  price: '3.50'
}

ReactDOM.render(<TodoComponent mssg="i like cheese" cheese={myCheese}/>, document.getElementById('todo-wrapper'))

export default TodoComponent
