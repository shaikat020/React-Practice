import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Practice</h1>
        <p>This is a simple React component for practice</p>
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <p className="info">
          Edit <code>src/App.jsx</code> and save to test hot module replacement.
        </p>
      </header>
    </div>
  );
}

export default App;
