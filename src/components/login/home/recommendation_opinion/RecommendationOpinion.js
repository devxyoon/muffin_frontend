import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./recommendation.style.css";

const RecommendationOpinion = () => {
  const [address, setAddress] = useState("/detail");
  const [arr, setArr] = useState([
    {
      title: "금 시세는 어디까지 상승할 것인가",
      regDate: "2020-08-07",
    },
    {
      title: "그린라이트 캐피탈의 2020년 2분기 투자 서한",
      regDate: "2020-08-07",
    },
    {
      title: "8월 6일 상장, 의료기기 기업 '이루다'",
      regDate: "2020-08-07",
    },
    {
      title: "바이오계의 테슬라? '슈뢰딩거'를 알아보자",
      regDate: "2020-08-07",
    },
    {
      title: "제빵 1위 기업, 'SPC삼립'",
      regDate: "2020-08-07",
    },
  ]);
  return (
    <div className="recommendation_opinion_container">
      {arr.map((item) => (
        <div key={item.index}>
          <div>
            <div>
              <div>
                <div className="opinion_title_section">
                  <Link to="opinion/detail">
                    {" "}
                    <div className="opinion_title">{item.title}</div>
                  </Link>

                  <div className="opinion_regdate">{item.regDate}</div>
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
