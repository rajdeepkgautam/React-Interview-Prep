Question 1:
What is the Difference between react and react native? Which one is 
    library or framework?
React and React Native are developed by Facebook and have gained a huge fan base 
in a short time. React is known as ReactJs, which is a JavaScript library to build 
single-page web applications.
   Besides, React Native is a React JS-based framework to design mobile apps.
Moreover, with reusable components, you can develop native mobile applications.
   React is a JavaScript library of reusable components designed to create skeletons of 
the apps, whereas React Native is designed to build native mobile apps with 
reusable components. React is an open-source JS library for building the UIs for 
web applications; besides, React Native is used to build rich mobile UI from 
declarative components using only JavaScript. Both React and React Native are ruling 
the industry and are widely used for mobile and web applications. However, the 
difference between web apps vs websites will not affect your user. */



Question 2:
What is the package name you are using for routing?
  React Router is a standard library system built on top of the React and used to 
create routing in the React application using React Router Package.
In this Browser Router as Router, Routes and Route and NavLink get imported from 
react-router-dom. React Router DOM enables you to implement dynamic routing in a web 
app. Unlike the traditional routing architecture in which the routing is handled in a
 configuration outside of a running app, React Router DOM facilitates component-based 
 routing according to the needs of the app and platform. */


 Question 3:
 What is lazy loading in react ?
   Lazy loading means that a component or a part of code must get loaded when it is 
  required. It is also referred to as code splitting and data fetching . Talking 
  about React specifically, it bundles the complete code and deploys all of it at 
  the same time.
    An example of image lazy-loading can be found on the popular publishing platform 
Medium, which loads lightweight placeholder images at page load, and replaces them 
with lazily-loaded images as they're scrolled into the viewport. An example of image 
lazy-loading in action. */


Question 4:
Difference b/w Stateful and stateless Component?
Stateful Component - 
  Stateful components are those components which have a state. 
The state gets initialized in the constructor. It stores information 
about the component’s state change in memory. It may get changed depending upon the 
action of the component or child components.

Example: 
import React, { Component } from 'react';

class StateExample extends Component {
    constructor(){
      super();
          this.state={
               first_name: '',
               last_name: ''
            }
    }

   render(){

      <div>
         <p>State Component </p>
      </div>

   }

}
export default StateExample; 

Stateless Components:
 Stateless components are those components which don’t have any state at all, 
 which means you can’t use this.setState inside these components. It is like a 
 normal function with no render method. It has no lifecycle, so it is not possible 
 to use lifecycle methods such as componentDidMount and other hooks. When react 
 renders our stateless component, all that it needs to do is just call the stateless 
 component and pass down the props.
 
Example:
import React from 'react';

function Example(props) {
      return(
        <div>
           <p>{props.first_name}</p>
           <p>{props.last_name}</p>
        </div>
        )
}
export default Example;  */


Question 5:
How do you switch one component to another, Conditional Rendering?
  1.Switching from one component to another - 
1.Link
2.NavLink
3.Redirect Component
4.history.push
5.history.replace
6.Link Link is used to manage the navigation and it worked as an anchor tag. Check below code for the demonstration. import { Link } from 'react-router-dom'; ... ...
  About
7.NavLink NavLink behaves the same as Link but in addition, it comes with a new attribute called “activeClassName” which helps us to add the class to the anchor tag when page url will match.
8.import { NavLink } from 'react-router-dom'; ... ... About

React Conditional Rendering-
In React, we can create multiple components which encapsulate behavior that we need.
After that, we can render them depending on some conditions or the state of our 
application. In other words, based on one or several conditions, a component decides 
which elements it will return. In React, conditional rendering works the same way as 
the conditions work in JavaScript. We use JavaScript operators to create elements 
representing the current state, and then React Component update the UI to match them.

There is more than one way to do conditional rendering in React.
 They are given below.
  1.if
  2.ternary operator
  3.logical && operator
  4.switch case operator
  5.Conditional Rendering with enums */ 


Question 6:
Routing implementation

Question 7:
 How do you pass data from parent to child */component/day2/....