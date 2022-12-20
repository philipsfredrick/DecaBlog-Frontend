import React from "react";
import "./Login.css";
import Login from "../../../assets/email/Blogger-logo 1.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const DecadevSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const login = "Login";

  const handleSubmit = async (e) => {
   
    // console.log("submitting");
    setLoading(true);
    e.preventDefault();

    try {
      console.log("this was fired");
      const response = await axios.post(
        "http://localhost:8080/api/v1/login/decadev",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 202) {
        console.log("This is the token ", response.data.data.accessToken);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful",
          confirmButtonText: "OK",
          timer: 5000,
        });
        localStorage.setItem(
          "user", JSON.stringify(response.data.data),
        );
        console.log("this is my story",response.data.data);
        // const fullName = response.data.data.name;
        // const [first, last] = fullName.split(" ");
        // localStorage.setItem("first", JSON.stringify(first));
        // localStorage.getItem("token");
        console.log("I am here !!!!!!");
        navigate("/stories");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="background-login">
        <div className="login-form-header">
          <img src={Login} alt="blog-logo" />
          <h1>Login</h1>
          <p>
            <em>
              Creativity lives here.
              <strong> Explore. </strong>
            </em>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="title">
            <h2>Login into your account</h2>
          </div>
          <div className="login-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="login-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="login-row">
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <div className="already">
            <span>
              Don't have an account?.
              <a href="/signup">
                <em>SignUp</em>
              </a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default DecadevSignIn;
