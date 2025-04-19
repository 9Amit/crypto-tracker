import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";


const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
