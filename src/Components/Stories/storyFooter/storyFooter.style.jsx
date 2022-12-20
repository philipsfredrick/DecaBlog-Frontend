import styled from "styled-components";

export const StyledFooter = styled.div`
  position: absolute;
  top: 4427px;
  left: 0px;

  height: 293px;
  width: 100%;
  padding: 32px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f2f4f7;

  /* border: 1px solid brown; */

  .span {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 140px;
    padding-top: 39px;
  }

  .decablog {
    margin-top: 11px;
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .footermini {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .foot {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 17px;
    color: #000000;
  }

  .footlast {
    margin-top: 20px;
  }

  .landingfooterText {
    margin-top: 30px;
  }

  @media only screen and (min-width: 450px) {
    .foot {
      font-weight: 400;
      font-size: 1rem;
      line-height: 20px;
    }
  }
`;
