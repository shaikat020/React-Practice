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
  let [votesA, setVotesA] = useState(0);
  let [votesB, setVotesB] = useState(0);

  const iseligible = age>=18;
  let message = "";

  if (votesA > votesB){
    message = "Candidate A is leading"
  }
  else if (votesA < votesB){
    message = "Candidate B is leading"
  }
  else if (votesA == votesB){
    message = "It is a tie"
  }
  

  return (
    <>
    <h1><b>Welcome to Voting App</b></h1>
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

      <p>{age < 18 ? 'Sorry, you are not eligible to vote.': 'Welcome! You are eligible to vote.'}</p>

      {iseligible && (<>
        <button onClick={()=>{
          votesA++;
          setVotesA(votesA);
        }}>Vote for candidate A</button>
        <button onClick={()=>{
          votesB++;
          setVotesB(votesB);
        }}>Vote for candidate B</button>

        <h2>Results:        </h2>
        <p>Votes A : {votesA}</p>
        <p>Votes B : {votesB}</p>
        </>
      )}
      
      <h2>Remarks:</h2>
      <p>{message}</p>
    </>
  )
}

export default App

// doesnt work in my ui view as react work as virtual dom 