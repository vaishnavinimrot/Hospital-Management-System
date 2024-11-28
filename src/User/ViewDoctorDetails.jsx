import React from "react";

function ViewDoctors() {
  const doctors = [
    { name: "Dr. Smith", specialty: "Cardiology" },
    { name: "Dr. Lee", specialty: "Neurology" },
    { name: "Dr. Williams", specialty: "Orthopedics" },
    { name: "Dr. Johnson", specialty: "Pediatrics" },
    { name: "Dr. Brown", specialty: "Dermatology" },
  ];

  return (
    <div style={{ marginTop: "40%" }}>
      <h2>Doctor Details</h2>
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

export default ViewDoctors;
