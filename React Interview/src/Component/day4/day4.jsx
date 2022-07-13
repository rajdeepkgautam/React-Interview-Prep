//What are React Life cycles Explain each one with Example

//every component in react has it's own life cycle. In react lifecycle methods are applicable for class components only.
//But thanks for react Hooks for providing lifecycle methods for functional component
//component will go through three phases in lifecycle.
//1. Mounting: mounting phase will execute when the application is first rendered on the browser.
//we will use the method for mounting phase is "componentDidMount()".
//2. Updating: updating phase will come when the state of the application changes or any udation happend in the application.
//we will use the method for updating is "componentDidUpdate()".
//3. Unmount:  unmounting phase will execute when the application removed from the browser or DOM.
//we will use the method for unmounting is "componentWillUnmount()".

//What is UseReducer Hook ?(Implementation)

//useReducer:
//UseReducer is similar as useState.
//useReducer is used when we have a complex state logic having many sub values or the current state value is based on the previous state.
//useReducer takes two arguments one is state and action and returns the current state and dispatch method.
//example: import { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// }

// export default Counter;

//What is UseMemo Hook ?(Implementation)

//useMemo:
//useMemo hook returns a memoized value.
//it means that the value need not to be calculated every time.
//useMemo hook will run only one of it's dependencies are updated. useMemo and useCallback are similar. useMemo returns a memoized value. useCallback returns memoized function.

//Example: import React,{useState,useMemo} from "react";

// const Memo = () =>{
//     const[increase,setIncrease]= useState(0);
//     const[decrease,setDecrease]= useState(100);
//     const multiplyMemo = useMemo(function multiply(){
//         console.log("it is rendering")
//         return increase*10;
//      },[increase])
    
// return(<div>

// <h1>UseMemo.</h1>

// <h2>increased no is {increase}</h2>
// <h2>decrease no is {decrease}</h2>
//    <h2>{multiplyMemo}</h2>
// <button onClick={()=>setIncrease(increase+5)}>increase button👆</button>
// <button onClick={()=>setDecrease(decrease-2)}>decrease button👇</button>

// </div>)
// }
// export default Memo;

//What is UseRef Hook ?(Implementation)

//useRef:
//useRef is used to persists the value between the renders.
//it is used to store mutable value that is not cause render when updated.
// it can be used to access DOM element.
//Example: import { useState, useEffect, useRef } from "react";
// const Reference = () =>{
//     const [inputValue, setInputValue] = useState("");
//     const previousInputValue = useRef("");
  
//     useEffect(() => {
//       previousInputValue.current = inputValue;
//     }, [inputValue]);
  
//     return (
//       <>
//       <h1>UseRef</h1>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <h2>Current Value: {inputValue}</h2>
//         <h2>Previous Value: {previousInputValue.current}</h2>
//       </>
//     );
//   }

//   export default Reference;

//What is Context api?

//React context API is the one way to pass data from parent to chaild in react . one parent have many childrens.
//context Api can be created by using "createContext()".
//it retruns consumer and  producer the names itself saying that the producer provides data to the child.the consumor in the child will takes the data.
//Example: import React, { createContext } from "react";
// const UserContext = createContext();

//Difference between callback and useCallback Hook ?

//callback:
//callback is a function, usually given as an argument, that you execute before returning from your function.
// This is usually used in asynchoronous situations when you need to wait for I/O
// The callback function may be some code that hasn't been executed yet, and you don't know what's above your function in the call stack

//callbach Hook:
// The useCallback hook is used when you have a component in which the child is rerendering again and again without need.
// Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

//What is Props Drilling Concept ?What is State Uplifting ?

//props drilling:
//Prop drilling refers to the process of sending props from a higher-level component to a lower-level component. To pass the props down from the topmost component, we must do something like this.
//However, prop drilling can become an issue in itself because of its repetitive code.

//state uplifting:
//In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”

//Difference between useEffect and useContext ?

//useEffect:
//Accepts a function that contains imperative, possibly effectful code.
// Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.
// Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

//useContext:
//Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
// When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

