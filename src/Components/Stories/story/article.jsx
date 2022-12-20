
import CardImage from "../../../assets/article-card/card-image.svg";
import CardComments from "../../../assets/article-card/comment-icon.svg";
import Like from "../../../assets/article-card/like-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  const {article, key} = props;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    
console.log("this is the key", key);
    const {
        title,
        dateTime,
        numberOfComments,
        picture,
        numberOfLikes,
        author,
        postContent,
        categoryId,
      } = article;

      console.log("this is the article", article);
      return (
        <div className="card-column">
          <div className="card-head">
            <div>
              <img src={CardImage} alt="card-profile"></img>
            </div>
            <div>
              <h1>{title}</h1>

              <div className="card-details">
                <p>{dateTime}</p>
                {/* <p>4 min read</p> */}
                {/* <a href="comments">
                  <img src={CardComments} alt="comment-icon" />
                </a> */}
                <Link
                to="/comments" 
                state={{
                  key:{key},
                }}
                >
                  <img src={CardComments} alt="comment-icon" />
                </Link>
                <span>{numberOfComments}</span>
                <a href="#">
                  <img src={Like} alt="likes-icon" />
                </a>
                <span>{numberOfLikes}</span>
              </div>
              <span className="Author">Author - {author}</span>
            </div>
          </div>

          <div className="card-body">
            <p className="Paragraph">
              {isReadMore ? postContent.slice(0, 150) : postContent}
              {postContent.length > 150 && (
                <a className="btn" onClick={toggleReadMore}>
                  {" "}
                  {isReadMore ? "...read more" : " ...show less"}
                </a>
              )}
            </p>
          </div>
        </div>
      );
}

export default Article