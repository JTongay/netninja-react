Most of the React code comprises of components
 - Search bar component
 - Sign-up component
 - To-do list component
  - List item component
  - Add new item (form) component

Props
  - They are a way to pass data into the components which we want to display on the page.
  - Dynamic Components

Nesting Components
  - It does exactly what you would think it does. It puts a component inside a parent component.

Events
  - Handles interactivity.

Modularize
  - Split your files up into different files.
  - just do it with module.exports or import/export in es6.

Input Refs
  - This is for forms and such.
  - Use 'ref' in your HTML in the input tag and set it equal to something (just like ng-model in Angular)
  - In the onSubmit function you call in the form, you can reference it by saying "this.refs" and then '.whateveryouputinyourref'

Component Lifecycle
  - Certain functions in a React Component fire at a certain time, like the "getInitialState" function fires before "render"
  - Mounting Lifecycle Functions
    1. getInitialState
      - Set the initial state of the component
    2. componentWillMount
      - Any last minute prep before component mounts
    3. Render
      - Returns HTML to add to the DOM
    4. componentDidMount
      - Fires after component mounts to the DOM
      - Good place to load in external data

Updating Lifecycle Functions
  1. componentWillReceiveProps
    - Called before a component receives any new props
    - Can compare the current and new props and change state
  2. shouldComponentUpdate
    - Can return false if no update wanted
  3. componentWillUpdate
  4. render
  5. componentDidUpdate
    - Operate on the DOM or perform network requests.
