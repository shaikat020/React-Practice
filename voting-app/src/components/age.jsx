import React from 'react'

export default function Age(age, setAge) {
    


  return (
    <div>
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
    </div>
  )
}
