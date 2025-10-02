// With useState:
// It adds a state variable to a component.
// State is data that can change over time (like input values, counters, toggles, fetched data).
// When state changes, React re-renders the component with the new data

import { useState } from "react";

function App() {
  // const hook = useState(0);
  //using destructor
  let [ count, setCount]= useState(0);
  // console.log(a, b);
  // let count= 0;
  

  return (
    <>
      <h1>Count is {count}</h1>
      
      <button onClick={()=> {
        count++;
        setCount(count);
      
    }
      }>Inc</button>
      <button onClick={()=> {
        count--;
        setCount(count);  
      }
      }>Dec</button>
      
    </>
  )
}

export default App

// doesnt work in my ui view as react work as virtual dom 