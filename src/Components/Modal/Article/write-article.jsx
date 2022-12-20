import React from "react";
import "../Article/articles.css";
import img_icon from "../../../assets/img_upload.svg";
import add_icon from "../../../assets/add-icon.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Close from "../../../assets/CloseBtn.svg";
import axios from "axios";
import Swal from "sweetalert2";

const MAX_COUNT = 5;

function About({ closeModal }) {
  const [file, setFile] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };
  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };
  const fileInputField = useRef(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [author, setAuthor] = useState("");
  const [postContent, setPostContent] = useState("");
  const [category, setCategory] = useState("");
 
  const nave = useNavigate();
  const Return = () => {
    nave("/stories");
  }

  let user = JSON.parse(localStorage.getItem("user"));
  let token = "Bearer " + user.accessToken;
  let userId = user.userId;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let articleData = new FormData();
    // const articleRequest = JSON.stringify({
    //   title: title,
    //   picture: picture,
    //   author: author,
    //   postContent: postContent,
    //   catgory: category,
    //   // id: id,
    // });

    // articleData.append("articleRequest", articleRequest);

    const body = {
      title: title,
      picture: picture,
      author: author,
      postContent: postContent,
      category: "mysql"
    }
    const config ={
      headers: {
        Authorization: token,
      }
    }

    try {
      console.log("writing article now");
      const response = await axios.post(
       "http://localhost:8080/api/v1/writeArticle-decadev", body, config).then( response2 =>
      {if (response2.status === 201) {
        console.log(
          "The response is #######################" + response2.status
        );
        console.log("The new response is " + response2);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Article created successfully",
          confirmButtonText: "Back to Stories Page",
          timer: 5000,
        });
        nave("/stories");
    }}
    )
    } catch (error) {
      console.log(error);
    }
    console.log("title is",title,"author is" ,author, "here is the picture",picture, "catgory is",category, "post is",postContent);
  };

  return (
    <>
      <div className="main-container">
        <div>
          <div className="top">
            <h2 className="write-an-article">Write an Article</h2>
            {/* <button className="close_btn" onClick={() => closeModal(false)}>
              {" "} */}
              {/* X<img src={CloseBtn} />
            </button> */}
            <img src={Close} alt="close-button" className="close_btn" onClick={Return}/>
          </div>
          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={handleSubmit}>
            <div className="article-row">
              <label htmlFor="title">Title</label>
              <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title of article"/>
            </div>
            <div className="article-row">
              <label htmlFor="author">Author</label>
              <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="Author"/>
            </div>
            <div className="article-row">
              <label htmlFor="category">Category</label>
              <input type="text" onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..."/>
            </div>
            {/* <div>
              <label htmlFor="category">picture</label>
              <input type="file" onChange={(e) => setPicture(e.target.value)} placeholder="select a photo"/>
            </div> */}
            <textarea
              className="text_area"
              placeholder="Write here"
              onChange={(e) => setPostContent(e.target.value)}
            />
            
            <div className="upload_wrapper">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                ref={fileInputField}
              />
              <label
                htmlFor="file"
                className="custom-file-upload"
                onClick={() => fileInputField.current.click()}
              >
                <div className="wrap-icon-photo">
                  <img src={img_icon} />
                  <span style={{ color: "lightgray" }}>Add photo</span>
                  <a>{file}</a>
                </div>
              </label>
              
            </div>
            <div className="more-pic">
              <input
                onChange={handleFileEvent}
                id="fileUpload"
                type="file"
                multiple
                accept=".docx,.png,.jpg,.jpeg,.mov"
              />
              <label htmlFor="fileUpload">
                <div className="add-more-pic">
                  <img src={add_icon} />
                  <a
                    className={`btn btn-primary ${
                      !fileLimit ? "" : "disabled"
                    } `}
                  >
                    Upload Files
                  </a>
                  <div className="uploaded-files-list">
                    {uploadedFiles.map((file) => (
                      <div>{file.name}</div>
                    ))}
                  </div>
                </div>
              </label>
            </div>
            <div className="article-btn">
              <button className="cancel-btn" onClick={Return}>
                {" "}
                Cancel
              </button>
              <button
                className="publish-btn"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default About;
