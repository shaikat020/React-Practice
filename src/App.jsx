// With useState:
// It adds a state variable to a component.
// State is data that can change over time (like input values, counters, toggles, fetched data).
// When state changes, React re-renders the component with the new data

import { useState } from "react";

function App() {
  // const hook = useState(0);
  //using destructor
  let [ age, setAge]= useState(15);
  // console.log(a, b);
  // let count= 0;
  

  return (
    <>
      <h1>Age is {age}</h1>
      
      <button onClick={()=> {
        age++;
        setAge(age);
      
    }
      }>Inc</button>
      <button onClick={()=> {
        age--;
        setAge(age);  
      }
      }>Dec</button>

      <p>You are {age < 18 ? (age < 6 ?'a baby' : 'a child') : age>40? 'an old': 'an adult'}</p>
      
    </>
  )
}

export default App

// doesnt work in my ui view as react work as virtual dom 