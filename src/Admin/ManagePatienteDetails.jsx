import React, { useState } from "react";

function ManagePatient() {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const addPatient = (e) => {
    e.preventDefault();
    if (newPatient.name && newPatient.age) {
      setPatients([...patients, newPatient]);
      setNewPatient({ name: "", age: "" });
    }
  };

  return (
    <div style={{ marginTop: "20%" }}>
      <h2>Manage Patient Details</h2>
      <form onSubmit={addPatient}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={newPatient.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newPatient.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.name}, Age: {patient.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagePatient;
