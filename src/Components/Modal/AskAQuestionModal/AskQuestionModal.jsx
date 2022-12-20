import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Close from "../../../assets/CloseBtn.svg";
import "./AskQuestion.css";
import Swal from "sweetalert2";

const Question = ({CloseModal}) => {
  const nav = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));
  let token = "Bearer " + user.accessToken;

const [questions, setQuestions] = useState("");
console.log("This is the close modal",CloseModal);
const Backspace = () => {
  nav("/stories")
}

// const forwardQuestions = () => {
//   nav("/questions");
// }


const handleSubmit =  async (e) => {

  e.preventDefault();
  console.log("asked a question");
  console.log(questions);

 
  try {
    const response = await axios.post(
      `http://localhost:8080/api/create-question`, {
        questions: questions
      },
      {
        headers: {
          Authorization: `${token}`,
        }
      }
    );


    if (response.status === 200) {
      // console.log("This is the token ", response.data.data.accessToken);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Question Submitted Successfully",
        confirmButtonText: "OK",
        timer: 5000,
      });
    console.log(response);
    nav("/stories");
  }
  
} catch(error) {
  console.log(error);
}
}

  return (
    <>
      <div className="background">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <h1>Add Question</h1>
              <h5>Your question will go public.</h5>
              <img src={Close} alt="close button" className="closeButton" onClick={Backspace}/>
            </div>

            <textarea
              name="add-question"
              id=""
              cols="30"
              rows="10"
              placeholder="Type here"
              onChange={(e) => setQuestions(e.target.value)}
            ></textarea>
            <div className="buttons">
              <button className="cancel" onClick={Backspace}>Cancel</button>
              <button className="add-question" onClick={handleSubmit}>Add Question</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Question;
