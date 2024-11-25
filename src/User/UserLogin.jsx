import React from 'react';

function UserLogin() {
  return (
    <div  className="user-login-container">
      <h2>User Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
