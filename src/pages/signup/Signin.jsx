import React from "react";
import { Link } from "react-router-dom";
import './auth.css';

const Signin = () => {
  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
