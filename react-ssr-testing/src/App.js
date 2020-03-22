import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    if(counter >= 1) setCounter(counter - 1);
  }

  return (
    <div className="App">
      <p className="counter">{counter}</p>
      <button onClick={increment} className="increment">Increment Hoe</button>
      <button onClick={decrement} className="decrement">Decrement Hoe</button>
    </div>
  );
}

export default App;
