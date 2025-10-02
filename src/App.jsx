

function App() {
  let count= 0;
  

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={()=> {count++;
      console.log(count);
    }
      }>Inc</button>
      <button onClick={()=> {count--;
    console.log(count);  
    }
      }>Dec</button>
      
    </>
  )
}

export default App

// doesnt work in my ui view as react work as virtual dom 