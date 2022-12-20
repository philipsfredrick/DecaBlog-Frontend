import React, { useEffect, useState } from "react";
import "./storyContent.css";
import Email from "../../EmailSubscription/emailService";
import axios from "axios";
import HomeFooter from "../storyFooter/storyFooter";
import Article from "./article";

const StoryContent = () => {
  const [allArticles, setAllArticles] = useState([]);
  // const [readMore, setReadMore] = useState(false);

  let user = JSON.parse(localStorage.getItem("user"));

  let token1 = "Bearer " + user.accessToken;

  console.log("Stories bearer token", token1);

  async function getArticles() {
    await axios
      .get("http://localhost:8080/api/v1/allArticles", {
        headers: {
          Authorization: `${token1}`,
        },
      })
      .then((resp) => {
        // console.log("Response is ", resp.data.data)
        setAllArticles(resp.data.data);
        console.log("testing", resp.data.data);
        console.log("here are articles", allArticles);
      })
      .catch((error) => {
        console.log("error occurred", error);
      });
  }
  useEffect(() => {
    getArticles();
  }, []);
  // getArticles();
  console.log("here are articles", allArticles);
  // {allArticles.map((article) => {

  // })}

  return (
    <>
      <div className="content">
        {allArticles.map((article) => <Article article={article} key={article.articleId} /> ).sort((a,b) => a-b).reverse()
        
        }
            {/* { console.log("first id",allArticles[0].articleId)
      } 
       */}

        <Email />
        <HomeFooter />
      </div>
    </>
  );
};

export default StoryContent;
