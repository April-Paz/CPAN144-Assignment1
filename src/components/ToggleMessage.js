import React from 'react';
import { useState } from "react";

const ToggleMessage = () => {
  const [show, setShow] = useState(false); // Message is hidden by default

  return (
    <div className="hidden-container">
      <button 
        onClick={() => setShow(!show)} // On click, toggle between shoa nd hide
        className="hidden-button"
      >
        Show Message
      </button>

      {show && <p>Congratulations! You've found the hidden message! 🎉💥</p>} {/* If show is true, then render paragraph */}
    </div>
  );
};

export default ToggleMessage;