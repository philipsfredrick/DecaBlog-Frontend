import React from "react";
import Button from "../../../common/Button";
import Logo from "../../../common/Logo";
import homeIcon from "../../../assets/home.png";
import usersIcon from "../../../assets/users.png";
import notify from "../../../assets/Notification.png";
import darkMode from "../../../assets/DarkMode.svg";
import search from "../../../assets/Icon.png";
import avatar from "../../../assets/Avatar.svg";
import { useState } from "react";
import axios from "axios";
import "./homeBars.css";
import HomeFooter from "../storyFooter/storyFooter";
import { useEffect } from "react";
import SideBars from "./sideBars";
import Question from "../../Modal/AskAQuestionModal/AskQuestionModal";
import About from "../../Modal/Article/write-article";

const HomeBars = () => {
  const [askQuestionModal,setAskQuestionModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  
const closeModal = () => {
  setShowModal(false);
}
         
const CloseModal = () => {
    setAskQuestionModal(false);
}

  return (
    <>

      <div className="top-bar">
        {/* <img src={logo} alt="Decablog logo" />  for the logo */}
        <Logo />
        <div className="icons">
          <a className="home" href="/">
            <img src={homeIcon} alt="HomeIcon" />
          </a>
          <a className="users" href="/spaces">
            <img src={usersIcon} alt="spaces" />{" "}
          </a>
          <a className="notify" href="/notifications">
            <img src={notify} alt="notify" />
          </a>
          <a className="dark" href="/darkMode">
            <img src={darkMode} alt="dark-mode" />
          </a>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <img src={search} alt="search-icon" />
        </div>
        <div className="right-nest">
          <img src={avatar} alt="default-avatar" />

          
          {showModal && (<About closeModal={closeModal} />)}
 
          <Button
            className="button"
            text="Write an Article"
            background="#e2eae4"
            color="black"
            url="/article"
            height="44px"
            width="130px"
            onClick={() => {setShowModal(true);
            }}
          />
        

        
        </div>
        {
askQuestionModal && (
    <Question 
    CloseModal = {CloseModal}/>
       ) } 
          <Button
            className="button"
            text="Add Question"
            background="#34A853"
            url="/question"
            color="white"
            height="44px"
            width="130px"
            onClick={() => {
              setAskQuestionModal(true);
            }}
          />
      </div>
<SideBars />
    </>
  );
};

export default HomeBars;
