# New features used in this project

## Conditionally Rendering DOM Elements

In this project the content-component could render either the student-list or register components.  To accomplish this we used a switch to switch between the components and return the appropriate given some state value.

## Working with props

Props are values passed from a parent component to a child component and represent a dependency of the child.  Props are effectively function parameters being passed to a called function by the calling function. In TypeScript it is useful to declare the types of props such that typing can be validated both on the calling and called components. Props can be value types but can also be functions.  Functions passed to children is the general way in which data moves up the component hierarchy. 

## Iteratively rendering elements or components

You can iteratively render components or elements (arrays of data) by using TSX expression that maps the array to intended representation (a template of some sort).