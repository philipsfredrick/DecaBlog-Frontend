import React from 'react'
import Default from "../../assets/Default.svg";


const EachComment = ({comment}) => {

    const {
        comments
    } = comment;

    console.log("this is a comment", comment);
    return (
        <>
          <div className="Top-info">
            <img src={Default} alt="Default Avatar" />
            <h4>John Doe</h4>
            {/* <h4>June 15, 2022</h4> */}
            <h4>{comment.createdAt}</h4>
           
          </div>
          <div className="comment-sample">
            <p>{comment.comment}</p>
            <div className="button-actions">
              <button className="Button" type="button" name="button">
                Reply
              </button>
              <button className="Button" type="button" name="button">
                Like
              </button>
            </div>
          </div>
        </>
      );
}

export default EachComment;