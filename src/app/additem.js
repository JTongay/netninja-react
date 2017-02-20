import React, { PropTypes } from 'react'

//Import css
import './css/additem.css'

const AddItem = React.createClass({
  render () {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Hit Me" />
      </form>
    )
  },
  //custom functions
  handleSubmit: function(event){
    event.preventDefault()
    this.props.onAdd(this.refs.newItem.value)
    this.refs.newItem.value = '';
  }
})

export default AddItem
