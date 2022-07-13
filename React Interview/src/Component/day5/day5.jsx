//High Order Component in react js ?

//HOC: Higher order component is a component that takes another component as an perameter and returns a new component.
//We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components. 
// Example:const EnhancedComponent = higherOrderComponent(WrappedComponent)

//example:import { useState } from "react"

// function CounterHoc( Component, Value ) {
//     const UpgradeComponent = () => {
//     const[Counter, setCounter] = useState(0);
//     const HandleCounter = () => setCounter(Counter+Value);
//     return(
//         <Component Counter={Counter}  HandleCounter={HandleCounter}/>
//     )
//     }
//     return UpgradeComponent;
// }

// export default  CounterHoc;

//this component can use in any component recieving like props.

//Do you know about SEO ? Is it true that react js supports SEO support

//SEO: SEO stands for search engin optimization.
//It is used to improve quality and quantitity of website traffic to a website or webpage.
//It targets to unpaid trafic (Known as "natural" or organic results) than paid traffic or direct traffic.
//It will used when creating UI interfaces for your app/website.
//we should use some tricks to understand by google crawlers and ,therfore,good for SEO.

//clean up in useEffect

//clean up in useEffect works like an ComponentWillUnmount() in class component.
//for functional component the lifecycle methods will not work as like class component .
//because of that the useEffect hook provides the lifeCycleMethods for the functional component.
//clean up function will call when the component removed from the webpage.
//clean up works like a componentWillUnmount in functional component.

//Example:return function cleanup() {
    //     console.log("componentWillUnmount is happen...!")
    // }
//   })

// What is the use of useCallback and useMemo

//useMemo: useMemo will return a memorized value. that is it will remember the value that calculated for the sam inputs.same inputs will come then return the output that memorized by avoiding rendering everytime.
//useCallback: useCallback is same like useMemo but it will return memorized function. this will render only one of the input changes.

//Why do we need keys in react less

//Keys are unique.
//The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as
//Unique IDs are the best value to assign to keys. (or) "Key" prop is used to look pretty, and there is no benefit whatsoever. "Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm. It is one of the attributes in HTML. It is NOT commonly used in an array.

//Do you know about redux

//Redux is the one of the way to pass data in react.it is the centralized container for the enire application. it is a state managment tool.
//You can also try developing small apps. Sample code for increase or decrease counter is given below − This is the root file which is responsible for the creation of store and rendering our react app component. /src/index.
//Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion. Here is a small example of react and Redux application.
