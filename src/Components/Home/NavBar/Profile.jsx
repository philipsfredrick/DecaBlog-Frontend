import React from 'react';
import { FooterStyle } from "../homefooter/footer.style";

export default function getProfile() {
  return (
    <FooterStyle>
      <div class="footermini">
          <span className="span">
          </span>
          <p className="landingfooterText foot">
            DecaBlog is platform for budding software developers at Decagon to
            explore technical writing and leverage the community to ask insightful
            questions and get answers - to connect and to help one another achieve
            the world-class developer dream
          </p>
          <p className="foot footlast">Copyright ©2022. All rights reserved. Privacy & Terms.</p>
      </div>
    </FooterStyle>
  );
}
