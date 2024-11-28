import React from "react";

function AdminLogin() {
  return (
    <div  className= "admin-login-container" >
      <h2>Admin Login</h2>
      <form>
      <label>Username:</label>
        <input type="text" placeholder="Username" />
        <label>Password:</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
