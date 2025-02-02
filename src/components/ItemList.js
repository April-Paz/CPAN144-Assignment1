import React from 'react';
import { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]); // Empty array to store list
  const [newItem, setNewItem] = useState(""); // Input for users

  // Handle input change
  const handleChange = (event) => {
    setNewItem(event.target.value); // e.target.value to catch current text by user
  };

  // Add new item to list
  const addItem = () => {
    if (newItem.trim() !== "") { // If newItem is empty (after removing spaces), update
      setItems([...items, newItem]); // If true, add new item
      setNewItem(""); // Clear input field after adding
    }
  };

  // Remove an item from the list
  const removeItem = (index) => { //removeItem keeps all items except the one to be removed
    const updatedItems = items.filter((_, i) => i !== index); // filter() to create new array by removing given index. i = current index, _ = current item.
    setItems(updatedItems); // Update state with new array
  };

  return (
    <div>
      <h3>Organize Your Thoughts</h3>
      <h2>To Do List:</h2>

      {/* Input to add new items */}
      <input 
        type="text" 
        value={newItem} // Remember input
        onChange={handleChange} 
        placeholder="Type here..." 
      />
      <button onClick={addItem}>Add</button> {/* onClick, add item */}

      {/* Display the list */}
      <ul>
        {items.map((item, index) => ( // loop through item 
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button> {/* Remove button on every item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;