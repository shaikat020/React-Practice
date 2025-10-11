import { useState } from 'react';


export const Frm = () => {
    const [name, setName] = useState("Shaikat");
  return <input type="text" value={name}  onChange={(e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }}/>;
  
}
