import React from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

// Optional: Add styles specific to Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Hospital Management System</h1>
        <ul className="nav-links">
         
          <li>
            <Link to="/user/UserLogin">
              <i className="fas fa-user"></i> User
            </Link>
          </li>
          <li>
            <Link to="/user/Register">
              <i className="fas fa-user-plus"></i> Register
            </Link>
          </li>
          <li>
            <Link to="/admin/Adminlogin">
              <i className="fas fa-user-shield"></i> Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
