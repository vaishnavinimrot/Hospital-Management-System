import React from "react";

function ViewDoctors() {
  const doctors = [
    { name: "Dr. Smith", specialty: "Cardiology" },
    { name: "Dr. Lee", specialty: "Neurology" },
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
