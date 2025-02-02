import React from 'react';
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function FormPage() {
  const [formData, setFormData] = useState({ name: "", email: "" }); // Name and email inputs are empty
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // Keep existing vaue, spread operator. Update fields.
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page rafresh
    setSubmitted(true); // Hide form when submitted
  };

  return (
    <div>
      <Navbar /> 
      <br />
      <h3>Log in for more content</h3>
      <h2>Sign in</h2>
      {submitted ? ( // If submitted is true, then show the message. else, show form.
         <p>Thank you, {formData.name}! We have received your submission.</p> 
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required // field cannot be empty
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required // field cannot be empty
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}