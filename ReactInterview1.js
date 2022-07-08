// 1. What is Virtual DOM?
// The Virtual DOM (VDOM) is an in-memory representation of Real DOM. 
//The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation. (or) DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.




// 2. What is SPA?

// Single page application : Any web application , in which when you are clicking on any button or selecting option from navigation bar then if your page which means browser page is reloading then that means that application is your multi - page application . If it does not reload the browser page and just only updates the page without reloading then that application is known as Single Page application. When you create React application using CRA, (create-react-app boilerplate , developed by Facebook) it always create the application which will be Single page application.




// 3. What is difference between Functional and Class component?

// Functional Components:
// 1) A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
// 2) There is no render method used in functional components.
// 3) Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
// 4) React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
// 5) Hooks can be easily used in functional components to make them Stateful. example: const [name,SetName]= React.useState(" ")
// 6) Constructors are not used.

// example of Functional Component :-
// const Func = () => {
//   return (
//     <>
//       <h1>This is Functional Comp</h1>
//     </>
//   );
// };

// export default Func;

// Class Component::
// 1) A class component requires you to extend from React. Component and create a render function which returns a React element.
// 2) It must have the render() method returning JSX (which is syntactically similar to HTML)
// 3) Also known as Stateful components because they implement logic and state.
// 4) React lifecycle methods can be used inside class components (for example componentDidMount).
// 5) It requires different syntax inside a class component to implement hooks. example: constructor(props) { super(props); this.state = {name: ‘ ‘} }
// 6) Constructor are used as it needs to store state.

// example of Class Component :-
// import React from "react";

// class ClassComp extends React.Component {
//   render() {
//     return <h1>This is Class Comp</h1>;
//   }
// }

// export default ClassComp;




// 4. What does mean by state and its use in react?

// State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.
// State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.
// example :-
// import React from "react";

// class StateInClass extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       name: "Tron"
//     };
//   }

//   render() {
//     return (
//       <>
//         <h3>State Ex = {this.state.name}</h3>
//       </>
//     );
//   }
// }

// export default StateInClass;




// 5. What is JSX and why do we use it instead of js?

// JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax. 




// 6. What is package.json?

// It contains the information about the project and also contains the libraries which the project is using and it also has the description of the commands which gets used to run test or build your project.