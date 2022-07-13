//What is an event in react?

//Events: Events is an action that could be triggered as the result of the user action or system action.
//we have many events like
//onClick,onChange,onMouseOver,onKeyDown,etc.,

//Example:
// const Events = () => {
//             function intro(){
//              alert("onclick event");
//             }
//             return <button onClick ={intro}> click me</button>
// }

// export default Events;

//What is memory leak and how to overcome?

//Memory leak occurs when programmers create a memory in heap and forget to delete it.
// The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory. Eventually, in the worst case, too much of the available memory may become allocated and all or part of the system or device stops working correctly, the application fails, or the system slows down vastly .
// Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate.

//Do you prefer function-based or class component and why ?

//I will prefer functional component. because Functioal components are plain javascript pure function.
//It is easy to use then class components.easy to understand.easy to write.
//anyone can understand the code.adding functionality is veryy easy.

//Explain reducer as pure function in redux

//In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state.
// The action describes what happened and it is the reducer's job to return the new state based on that action.
// (previousState, action) => newState

//Why do we use redux thunk?

//The most common use case for Redux Thunk is for communicating asynchronously with an external API to retrieve or save data. Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API. Redux Thunk
//is middleware that allows you to return functions,
//rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for 
//this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.

//What do you know about NPM?

//NPM stands for 'Node Package Module',
//npm is the world's largest software registry. Open source developers from every continent use npm to 
//share and borrow packages, and many organizations use npm to manage private development as well.