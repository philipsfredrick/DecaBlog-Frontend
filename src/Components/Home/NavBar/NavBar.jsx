import React from "react";
import Logo from "../../../common/Logo";
import { NavBarStyle } from "./NavBar.style";
import icon1 from "../../../assets/home.png";
import icon2 from "../../../assets/users.png";
import icon3 from "../../../assets/Notification.png";
import icon4 from "../../../assets/Icon.png";
import Button from "../../../common/Button";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import logout1 from "../../../assets/logout.png";
import profileicon from "../../../assets/profileicon.png";
import setting from "../../../assets/setting.png";
import { Navigate, useNavigate } from "react-router-dom";
export default function NavBar() {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const closeMenu = () => {
    setShowDropdown(false);
  };
 const  navigate =useNavigate()
 function handleLogout(){
    // localStorage.removeItem("token");
navigate("/login")
  }
  return (
    <NavBarStyle>
     
      <Logo />
      <div className="iconDiv">
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
      </div>
      <div>
        <input type="text" placeholder="Search" className="searchDiv" />
        <img src={icon4} alt="" className="iconImage" />
      </div>

      {/* <Ddd>
        hello */}
      {/* </Ddd>
     <div className='avatar1'> <span  style={{display:"flex", cursor: "pointer" }} onClick={()=>setShowDropdown(!showDropdown)}> avatar</span></div> */}
      {/* <FiChevronDown /> */}
      <Dropdown showDropdown={showDropdown}>
        <div className="subdrop">
        <h4>Jessica Andrey</h4>
        <h5>Decadev</h5>
        </div>
        {/* <div className="drop"> */}
        <DropdownItem>
         <img src={profileicon} alt=""/><span  className="item">Profile</span>
        </DropdownItem>
        <DropdownItem>
        <img src={setting} alt=""/><span className="item">Setting</span>
        </DropdownItem>
        <div>
        <DropdownItem >
        <img src={logout1} alt=""/><span className="item" onClick={handleLogout}>Logout</span>
        </DropdownItem>
        </div>
        {/* </div> */}
      </Dropdown>

      <Button
        className="button"
        text="Get Started"
        background="#34A853"
        color="white"
        url="/login"
        height="44px"
        width="130px"
      />
     
    </NavBarStyle>
  );
}

const Dropdown = styled.div`
  position: absolute;
  margin-top: 14%;
  background-color: #fff;
  width: 200px;
  right: 12%;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.2);
  z-index: 100;
  height:180px;
  /* padding-bottom: 3px; */

display: ${({ showDropdown }) => (showDropdown ? "block" : "none")};
transition: all 0.3s ease-in-out; 
.subdrop{
  /* border:3px solid blue; */
  padding-top: 10px;
  padding-left: 30px;
}
.drop{
  /* border:4px solid red; */
  margin-top: 30px;
}
h5{
  color: #98A2B3;
  font-weight: 400;
font-size: 14px;
}
`;
const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #21334f;
  font-weight: lighter;
  margin: 15px 20px;
  
  .item{
    cursor: pointer;
    /* border: 3px solid red */
  }
`;
const Ddd = styled.div`

position: relative;
`
