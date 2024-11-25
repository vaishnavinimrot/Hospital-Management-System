import React, { useState } from "react";

function UserRegister() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered User:", form);
  };

  return (
    <div className= "user-register-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegister;
