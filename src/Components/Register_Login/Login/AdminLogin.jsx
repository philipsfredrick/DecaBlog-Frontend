import React from "react";
import "./Login.css"

const AdminSignIn = () => {
  return (
    <>
      <div className="background-login">
        <div className="login-form-header">
          <img src="" alt="blog-logo" />
          <h1>Admin SignIn</h1>
          <p>
            <em>
              Creativity lives here.
              <strong> Explore. </strong>
            </em>
          </p>
        </div>
        <form className="login-form">
          <div className="title">
            <h2>Sign into your account</h2>
          </div>
          <div className="login-row">
            <label htmlFor="email">Email</label>
            <input type="email" name="" placeholder="joe@example.com" />
          </div>
          <div className="login-row">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="login-row">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminSignIn;
