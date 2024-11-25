import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import ManageDoctor from "./Admin/ManageDoctorDetails";
import ManagePatient from "./Admin/ManagePatienteDetails";
import PostOperationSchedule from "./Admin/PostOperationSchedule";
import UserRegister from "./User/Register";
import ViewDoctors from "./User/ViewDoctorDetails";
import ViewSurgicalInfo from "./User/ViewSurgicalInfo";
import UserLogin from "./User/UserLogin";
import Home from "./Home";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar will be rendered on every page */}
      <NavBar />
      <Sidebar />
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Home />} />
        <Route path="/user/UserLogin" element={<UserLogin />} />
        <Route path="/admin/AdminLogin" element={<AdminLogin />} />
        <Route path="/admin/manage-doctor" element={<ManageDoctor />} />
        <Route path="/admin/manage-patient" element={<ManagePatient />} />
        <Route path="/admin/post-schedule" element={<PostOperationSchedule />} />
        <Route path="/user/Register" element={<UserRegister />} />
        <Route path="/user/view-doctors" element={<ViewDoctors />} />
        <Route path="/user/view-surgery" element={<ViewSurgicalInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
