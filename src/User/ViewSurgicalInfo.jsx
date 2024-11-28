import React from "react";

function ViewSurgicalInfo() {
  const surgeries = [
    { type: "Heart Surgery", details: "Performed by Dr. Smith on 2024-11-25" },
    { type: "Brain Surgery", details: "Performed by Dr. Lee on 2024-12-01" },
    { type: "Knee Replacement", details: "Performed by Dr. Williams on 2024-12-05" },
    { type: "Spine Surgery", details: "Performed by Dr. Johnson on 2024-12-10" },
    { type: "Cataract Surgery", details: "Performed by Dr. Brown on 2024-12-15" },
  ];

  return (
    <div style={{ marginTop: "30%" }}>
      <h2>Surgical Information</h2>
      <ul>
        {surgeries.map((surgery, index) => (
          <li key={index}>
            {surgery.type} - {surgery.details}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewSurgicalInfo;
