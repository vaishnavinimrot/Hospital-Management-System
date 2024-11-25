import React, { useState } from "react";

function PostOperationSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [schedule, setSchedule] = useState({ doctor: "", date: "" });

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const addSchedule = (e) => {
    e.preventDefault();
    if (schedule.doctor && schedule.date) {
      setSchedules([...schedules, schedule]);
      setSchedule({ doctor: "", date: "" });
    }
  };

  return (
    <div style={{ marginTop: "30%" }}>
      <h2>Post Operation Schedule</h2>
      <form onSubmit={addSchedule}>
        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={schedule.doctor}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={schedule.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Schedule</button>
      </form>
      <ul>
        {schedules.map((item, index) => (
          <li key={index}>
            Dr. {item.doctor} - {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostOperationSchedule;
