import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./recommendation.style.css";
import axios from "axios";

const RecommendationOpinion = () => {
  const url = "http://localhost:8080/boards";
  const [address, setAddress] = useState("/detail");
  const [arr, setArr] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`${url}/recentBoard`)
      .then((response) => {
        response.data.map((item) => setArr((arr) => [...arr, item]));
      })
      .catch((error) => {
        console.log("실패");
      });
  }, []);

  return (
    <div className="recommendation_opinion_container">
      {arr.map((item) => (
        <div key={item.index}>
          <div>
            <div>
              <div>
                <div className="opinion_title_section">
                  <div
                    className="opinion_title"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      sessionStorage.setItem(
                        "opinionDetail",
                        JSON.stringify(item)
                      );
                      history.push("/opinion/detail");
                    }}
                  >
                    {item.boardTitle}
                  </div>

                  <div className="opinion_regdate">{item.boardRegdate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationOpinion;
