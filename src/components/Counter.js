import React from 'react';
import { useState } from "react";

// Clicker counter game. Increase/Deacrease number
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h3>Fidget while you think by playing:</h3>
      <h2>Clicker Counter Game: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;