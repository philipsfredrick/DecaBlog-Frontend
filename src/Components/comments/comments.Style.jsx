import styled from "styled-components";

export const Styledcomment = styled.div`
  .close_comment {
    position: relative;
    top: -4%;
    left: 95%;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .background {
    /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(74, 42, 42, 0.5);
  background: #E5E5E5; */
  }
  .commentDiv {
    box-sizing: border-box;
    position: relative;
    width: 715px;
    height: 748px;
    background: #ffffff;
    margin: 200px auto;
    /* border: 1px solid red; */
    border: 1px solid #f5f5f5;
    box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.07),
      0px 12px 16px -4px rgba(33, 33, 33, 0.1);
    padding: 20px;
    overflow-y: auto;
  }
  .headerText {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
  }
  hr {
    width: 667px;
    height: 3px;
    background: #eeeeee;
  }

  .Top-info {
    display: flex;
    justify-content: flex-start;
    font-family: "Inter";
    margin-top: 10px;
    margin-bottom: 10px;

    img {
      padding-right: 10px;
    }
    h4 {
      padding-right: 30px;
    }
  }

  .comment-sample {
    width: 673px;
    height: auto;
    /* border: 1px blue solid; */
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    margin-bottom: 20px;
    overflow-y: auto;
  }

  .Button {
    width: 80px;
    height: 44px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;

    background: #f9fafb;
    border-radius: 6px;
    color: #34a853;
    border: none;
  }

  .button-actions {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
  }
  .inputDiv {
    /* flex-direction: column;
    align-items: flex-start;
    justify-content: center; */
    /* padding: 0px;
    gap: 8px; */

    width: 661px;
    height: 164px;
    // border: 1px solid gold;

    /* Inside auto layout */
    /* flex: none;
    order: 0;
    flex-grow: 0; */

    textarea {
      border-radius: 5px;
      width: 667px;
      height: 136px;
      padding: 10px;
      margin-bottom: 20px;
    }
    input {
      width: 667px;
      padding: 10px;
    }
  }
  .text {
    width: 101px;
    height: 20px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 7px 0;

    margin-bottom: 10px;
    align-items: center;

    color: #101828;
  }
  .labeltext {
    padding-top: 10px;
    margin-bottom: 20px;
  }
  .saveOption {
    /* align-items: center; */
    padding: 0px;
    gap: 8px;

    // border: 1px solid dodgerblue;
  }

  .Buttoncomment {
    margin-top: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    width: 152px;
    border-radius: 5px;
    color: #fff;
    background-color: #34a853;
    height: 44px;
  }

  .nameInput {
    background: #ffffff;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
  }
  .checkSec {
    margin-top: 100px;
  }
`;
