import React from 'react';
import { useState } from "react";

// Greet the User
const Greeting = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Capture text input
  };

  return (
    <div>
      <h2>Please Enter Your Name:</h2>
      <input 
        type="text" 
        placeholder="Type your name..." 
        value={name} // Input value here
        onChange={handleChange}  // Update when user types
      />
      
      {name && <h5>Hello, {name}! Please enjoy exploring my web app 😁. {/* If name is not empty, display message */}
        <br /> Can you find the hidden message?
        <br /> Hint: look to the left</h5>}
    </div>
  );
};

export default Greeting;