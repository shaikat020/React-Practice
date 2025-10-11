import { useState } from 'react';


export const Frm = () => {
    const [name, setName] = useState("Shaikat");
    const [age, setAge] = useState("22");
    const [gender, setgender] = useState("");  
    
    
  return <><input type="text" value={name}  onChange={(e) => {
    console.log(e.target.value);
    setName(e.target.value); 
  }}/>
  <br />
  <br />
  <input type="number" value={age}  onChange={(e) => {
    console.log(e.target.value);
    setAge(e.target.value); 
  }}/>
  <select value={gender} onChange={(e)=>{
    setgender(e.target.value);
    console.log(e.target.value);
  }}>
    <option value="" disabled>--Select--</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>

  <p>My name is {name}, I am {age} years old.</p>
  </>
  


  
}
