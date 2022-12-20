import { Styledcomment } from "./comments.Style";
import Close from "../../assets/CloseBtn.svg"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EachComment from "./comment";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [Allcomment, SetAllcomment] = useState([]);
  const [name, setName] = useState("");
  
  const location = useLocation();
  const articleId = location.state.key.key;
  console.log("this is the article id", articleId);

  let user = JSON.parse(localStorage.getItem("user"));
  let token = "Bearer " + user.accessToken;

  const navi = useNavigate();
  const Back = () => {
    navi("/stories");
  }

  async function FetchComment() {
    await axios
      .get("http://localhost:8080/api/v1/comments", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        SetAllcomment(res.data.data);
        console.log("This are the comments", Allcomment);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    FetchComment();
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("this was fired");
    console.log(comment);
    try {
      const resp = await axios.post(
        `http://localhost:8080/api/v1/makeComment`,
        {
          comment: comment,
          articleId: 27,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Styledcomment>
      <div className="bacground">
        <div className="commentDiv">
          <h3 className="headerText">Comments</h3>
          <img src={Close} alt="close-comment" className="close_comment" onClick={Back}/>
          <hr />

          {Allcomment.map((comment) => <EachComment key={comment.id} comment={comment}/>).sort((a,b) => a-b).reverse()}

          <h3 className="headerText">Leave a comment</h3>
          <hr />
          <form onSubmit={HandleSubmit}>
            <div className="inputDiv">
              <p className="text">Type Comment</p>
              <textarea
                placeholder="Write here..."
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <label className="labeltext">Name</label>
              <br />
              <input type="text" placeholder="Name" className="nameInput" />
            </div>

            <div className="checkSec">
              <input
                className="inputCheck"
                type="checkbox"
                name="saveName"
                value="comment"
                onClick={(e) => setName(e.target.value)}
              />
              <span for="saveName">
                {" "}
                Save my name in this browser for the next time I comment
              </span>
            </div>

            <button className="Buttoncomment" onClick={HandleSubmit}>
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </Styledcomment>
  );
};

export default CommentSection;
