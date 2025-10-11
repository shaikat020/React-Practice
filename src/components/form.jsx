import { useState } from 'react';


export const Frm = () => {
    const [input, setInput] = useState({
      name : "Shaikat",
      age : 22,
      gender : ""
    });
    
    
    const handleChange = (e)=>{
      // if (e.target.name === 'name'){
      //   //1st method 
      //   // input.name = e.target.value;
      //   // setInput({ ...input });
      //   //2nd method 
      //   setInput({...input, name : e.target.value});
      // }
      // if (e.target.name === 'age'){
      //   //1st method 
      //   // input.name = e.target.value;
      //   // setInput({ ...input });
      //   //2nd method 
      //   setInput({...input, age : e.target.value});
        
      // }
      // if (e.target.name === 'gender'){
      //   //1st method 
      //   // input.name = e.target.value;
      //   // setInput({ ...input });
      //   //2nd method 
      //   setInput({...input, gender : e.target.value});
      // }
      setInput((prevInput) => {
        return {
          ...prevInput,
          [e.target.name] : e.target.value
        }
      })
    }
    
  return <><input type="text" value={input.name} name='name' onChange={handleChange}/>
  <br />
  <br />
  <input type="number" value={input.age} name='age'  onChange={handleChange}/>
  <select value={input.gender} name='gender' onChange={handleChange}>
    <option value="" disabled>--Select--</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>

  <p>My name is {input.name}, I am {input.age} years old.</p>
  </>
  


  
}
