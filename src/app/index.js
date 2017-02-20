import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, Link} from 'react-router';

//Importing other components
import TodoItem from './todoitem'
import AddItem from './additem'
import About from './about'

//Import css
require('./css/index.css')

const App = React.createClass({
  render: function(){
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    )
  }
})

const TodoComponent = React.createClass({
    getInitialState() {
        return {
            todos: [
                'wash up', 'eat some cheese', 'take a nap', 'booyah fam'
            ],
            age: 30,
            things: [
                {
                    id: 1,
                    person: 'me'
                }, {
                    id: 2,
                    person: 'you'
                }, {
                    id: 3,
                    person: 'booyah'
                }
            ]
        }
    },

    render() {
        var ager = setTimeout(() => {
            this.setState({age: 35})
        }, 5000)
        var todos = this.state.todos;
        todos = todos.map((item, index) => {
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            )
        })
        var things = this.state.things;
        things = things.map((people, index) => {
          return (
            <li>{people.id}, {people.person}</li>
          )
        })
        return (
            <div id="todo-list">
                <p>The Busiest People have the most leisure....</p>
                <p>{this.state.age}</p>
                <Link to={'/about'}>About</Link>
                <AddItem onAdd={this.onAdd}/>
                <ul>
                    {todos}
                </ul>
                <p>Here are some people</p>
                <ul>
                  {things}
                </ul>
            </div>
        )
    }, //render

    onDelete: function(item){
      var updatedTodos = this.state.todos.filter((val, index)=>{
        return item !== val
      })
      this.setState({
        todos: updatedTodos
      })
    },

    onAdd: function(item) {
      var updatedTodos = this.state.todos;
      updatedTodos.push(item);
      this.setState({
        todos: updatedTodos
      })
    }
})


ReactDOM.render(
    <App/>, document.getElementById('todo-wrapper'))

export default TodoComponent
