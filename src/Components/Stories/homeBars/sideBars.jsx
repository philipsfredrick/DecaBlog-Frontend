import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import discover from "../../../assets/discover.svg";
import downArrow from "../../../assets/down-arrow.svg";
import usersIcon from "../../../assets/users.png";
import StoryContent from "../../Stories/story/storyContent";
import "./homeBars.css";

const SideBars = () => {
  const [allCategories, setAllCategories] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = "Bearer " + user.accessToken;

  console.log("sidebar token is", token);

  async function getCategories() {
    await axios
      .get("http://localhost:8080/api/v1/category/all", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setAllCategories(response.data.data);
        console.log("test categories", response.data.data);

        console.log("categories here", allCategories);
      })
      .catch((error) => {
        console.log("sidebar errors", error);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);
  console.log("here are categories", allCategories);

  const handleChange = () => {};

  const BASEURL = "http://localhost:8080/api/v1";

  const handleCategoryFetch = async (id) => {

    try {
      const response = await axios.get(`${BASEURL}/find-articles/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      console.log("result here ===>", response.data.data);
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <>
      <div className="left-bar">
        <div className="spaces">
          <img src={usersIcon} alt="users" />
          <a href="/spaces">
            <span>Spaces</span>
          </a>
        </div>

        <div className="categories">
          <div className="header">
            <a href="/more-categories">
              <h5>CATEGORIES</h5>
            </a>
          </div>
          {allCategories.map((category) => {
            const { categoryId, categoryName } = category;

            const CategoryContext = React.createContext(category);
            console.log("this is the category context", CategoryContext);
            {
              /* <a href="#">
        
      </a>
      <a href="#">
        <p>Node JS</p>
      </a>
      <a href="#">
        <p>Java</p>
      </a>
      <a href="#">
        <p>React</p>
      </a>
      <a href="#">
        <p>Android</p>
      </a>
      <a href="#">
        <p>Angular</p>
      </a>
      <a href="#">
        <p>PHP/Laravel</p>
      </a>
      <a href="#">
        <p>MySQL</p>
      </a> */
            }
            return (
              <>
                {/* <Link to="/stories/" key={categoryId}> {categoryName}</Link> */}
                <ul>
                  <li
                    onClick={() => {
                      console.log(categoryId);
                      handleCategoryFetch(categoryId);
                    }}
                  >
                    {categoryName}
                  </li>
                </ul>
              </>
            );
          })}

          <div className="discover">
            <img src={discover} alt="discoverIcon" />
            <button>
              {" "}
              <span>Discover more</span>
            </button>
            <img src={downArrow} alt="downArrow" className="downArrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBars;
