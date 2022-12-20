import React from "react";
import "./SignUp.css";
import Blogger from "../../../assets/email/Blogger-logo 1.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Decadev = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleFileSelect = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // function navigate1() {
    //   navigate("/login");
    // }

    let formData = new FormData();
    const registration = JSON.stringify({
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      about: about,
      // companyName: "decablog",
      // residence: "hello address"
    });
    formData.append("registration", registration);

    formData.append("file", image);
    try {
      console.log("Submit has been handled");
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/api/v1/register/decadev",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        console.log(
          "The response is #######################" + response.status
        );
        console.log("The new response is " + response);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account created successfully",
          confirmButtonText: "Continue to Login",
          timer: 1500,
        });
        navigate("/login");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <div className="background-signup">
        <div className="signup-form-header">
          <img src={Blogger} alt="blog-logo" />

          <h1>SignUp</h1>
          <p>
            <em>
              Connect, create, learn and share knowledge.
              <strong>Get started here.</strong>
            </em>
          </p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="title">
            <h2>Create new account</h2>
          </div>
          <div className="signup-row">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="signup-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="signup-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="signup-row">
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="PhoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="signup-row">
            <label htmlFor="password">About</label>
            <textarea
              className="about"
              name="about"
              onChange={(e) => setAbout(e.target.value)}
              value={about}
            ></textarea>
            <div className="signup-about">Let us meet you</div>
          </div>
          <div className="signup-row">
            <label htmlFor="photo">upload photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              placeholder="upload image"
              onChange={HandleFileSelect}
            />
          </div>
          <div className="already">
            <span>
              Already have an account?.
              <a href="/login">
                <em>Login</em>
              </a>
            </span>
          </div>
          <div className="signup-row">
            <button onClick={handleSubmit} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Decadev;
