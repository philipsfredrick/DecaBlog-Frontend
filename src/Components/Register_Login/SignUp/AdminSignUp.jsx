import React from "react";
import "./SignUp.css";

const Admin = () => {
  return (
    <>
      <div className="background">
        
          <div className="signup-form-header">
            <img src="" alt="blog-logo" />
            <h1>Admin SignUp</h1>
            <p>
              <em>
                Want to view the thoughts of great minds?
                <strong>Get started here.</strong>
              </em>
            </p>
          </div>
          <form className="signup-form">
            <div className="title">
              <h2>Sign up your account</h2>
            </div>
            <div className="signup-row">
              <label htmlFor="username">Name</label>
              <input type="text" name="username" />
            </div>
            <div className="signup-row">
              <label htmlFor="email">Email</label>
              <input type="email" name="" placeholder="joe@example.com" />
            </div>
            <div className="signup-row">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div className="signup-row">
              <label htmlFor="phoneNumber">PhoneNumber</label>
              <input type="text" name="phoneNumber" />
            </div>
            <div className="signup-row">
              <label htmlFor="password">About</label>
              <textarea className="about" name="about"></textarea>
              <div className="signup-about">Let us meet you</div>
            </div>
            <div className="already">
            <span>Already have an account?.<a>Login</a></span>
            </div>
            <div className="signup-row">
              <button>Submit</button>
            </div>
          </form>
      
      </div>
    </>
  );
};

export default Admin;
