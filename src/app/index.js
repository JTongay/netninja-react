import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'

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
                <li key={item.id}>{item}, {index}</li>
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
                <ul>
                    {todos}
                </ul>
                <p>Here are some people</p>
                <ul>
                  <li>{things}</li>
                </ul>
            </div>
        )
    } //render
})

ReactDOM.render(
    <TodoComponent/>, document.getElementById('todo-wrapper'))

export default TodoComponent
