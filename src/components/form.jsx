import { useState } from 'react';


export const Frm = () => {
    const [name, setName] = useState("Shaikat");
    const [age, setAge] = useState("22");
    const [gender, setgender] = useState("");  
    
    const handleChange = (setState, value)=>{
      console.log(value);
      setState(value);
    }
    
  return <><input type="text" value={name}  onChange={(e) => handleChange(setName, e.target.value)}/>
  <br />
  <br />
  <input type="number" value={age}  onChange={(e) => handleChange(setAge, e.target.value)}/>
  <select value={gender} onChange={(e)=> handleChange(setgender, e.target.value)}>
    <option value="" disabled>--Select--</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>

  <p>My name is {name}, I am {age} years old.</p>
  </>
  


  
}
