import React, { useState } from "react";

function ManageDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: "", specialty: "" });

  const handleChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  const addDoctor = (e) => {
    e.preventDefault();
    if (newDoctor.name && newDoctor.specialty) {
      setDoctors([...doctors, newDoctor]);
      setNewDoctor({ name: "", specialty: "" });
    }
  };

  return (
    <div className= "manage-patient-container">
      <h2>Manage Doctor Details</h2>
      <form onSubmit={addDoctor}>
        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={newDoctor.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
      <ul>
        {doctors.map((doc, index) => (
          <li key={index}>
            {doc.name} - {doc.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageDoctor;
