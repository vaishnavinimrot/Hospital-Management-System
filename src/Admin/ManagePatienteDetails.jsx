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
      setNewPatient({ name: "", age: "" }); // Reset form fields
    }
  };

  return (
    <div style={{ marginTop: "20%", textAlign: "center" }}>
      <h2>Manage Patient Details</h2>
      <form onSubmit={addPatient}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={newPatient.name}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            margin: "5px",
            borderRadius: "4px",
            width: "80%",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newPatient.age}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            margin: "5px",
            borderRadius: "4px",
            width: "80%",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "80%",
            marginTop: "10px",
          }}
        >
          Add Patient
        </button>
      </form>

      {/* Conditionally render Patient List title if patients are added */}
      {patients.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Patient List:</h3>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {patients.map((patient, index) => (
              <li
                key={index}
                style={{
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  marginBottom: "5px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                {patient.name}, Age: {patient.age}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ManagePatient;
