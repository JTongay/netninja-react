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
