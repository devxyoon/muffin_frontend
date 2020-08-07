import React from "react";
import "./home.style.css";
import { Link } from "react-router-dom";
import WordCanvas from "./wordcanvas/WordCanvas";
import Recommendation_News from "./recommendation_news/Recommendation_News";
import Asset from "./asset/Asset";

const Home = () => {
  return (
    <div className="home_container">
      <div className="recommendation_news_container">
        <div className="recommendation_news_section">
          <div className="title_section">
            <div className="documentroom_text">추천 뉴스</div>
            <Link to="/news" className="more">
              <span>더보기 ▶</span>
            </Link>
          </div>
          <div className="newsList">
            <Recommendation_News />
          </div>
        </div>
        <div className="keyword_wordcloud">
          <div className="title_section">
            <div className="documentroom_text">핫이슈 키워드</div>
          </div>
          <div className="wordcloud">
            <WordCanvas />
          </div>
        </div>
      </div>
      <div className="other_container">
        <div className="asset_section">
          <div className="title_section">
            <div className="documentroom_text">자산 현황</div>
            <div className="more_2">더보기 ▶</div>
          </div>
          <div>Asset</div>
        </div>
        <div className="opinion_section">
          <div className="title_section">
            <div className="documentroom_text">추천 오피니언</div>
            <Link to="/opinion" className="more_3">
              <span>더보기 ▶</span>
            </Link>
          </div>
          <div>Opinion</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
