import React from 'react'
import logo from "../../../assets/footerLogo.png";
import { StyledFooter } from './storyFooter.style';

const  HomeFooter = () => {
  return (
    <StyledFooter>
    <div class="footermini">
        <span className="span">
          <div>
            <img src={logo} alt=""/>
          </div>
          <div>
            <p className="decablog">DecaBlog</p>
          </div>
        </span>
        <p className="landingfooterText foot">
          DecaBlog is platform for budding software developers at Decagon to
          explore technical writing and leverage the community to ask insightful
          questions and get answers - to connect and to help one another achieve
          the world-class developer dream
        </p>

        <p className="foot footlast">Copyright ©2022. All rights reserved. Privacy & Terms.</p>
    </div>
  </StyledFooter>
  )
}

export default  HomeFooter