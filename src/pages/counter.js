import React from 'react';
import { useState } from "react";
import Navbar from "../components/Navbar";

// Clicker counter game. Increase/Deacrease number
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar /> 
      <br />
        <h3>Fidget while you think by playing:</h3>
      <h2>Clicker Counter Game: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;