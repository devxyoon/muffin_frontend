import React, { useState } from "react";
import "./recommendation_news.style.css";

const Recommendation_News = () => {
  const [title, setTitle] = useState(
    " 미래에셋자산운용, 초등학생 '온라인 경제교육' 이벤트 진행 "
  );
  const [summary, setSummary] = useState(
    " [파이낸셜뉴스] 미래에셋자산운용은 초등학생을 대상으로 온라인 경제교육 이벤트를 진행한다고 28일 밝혔다. 전국 초등학교는 코로나19 영향으로 지난 4월부터 원격수업과 등교...  "
  );
  const [keyword, setKeyword] = useState(" 미래에셋자산운용 ");
  const [regDate, setRegDate] = useState("  2020-07-28");
  const [thumbnail, setThumbnail] = useState(
    " https://imgnews.pstatic.net/image/thumb70/014/2020/07/28/4467984.jpg "
  );
  const [address, setAddress] = useState("/detail");
  const [arr, setArr] = useState([
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
  ]);
  return (
    <>
      <div className="recommendation_container">
        {arr.map((item) => (
          <div key={item.index}>
            <div>
              <div>
                <div>
                  <div className="news_title_section">
                    <div className="news_title">{item.title}</div>
                    <div className="news_regdate">{item.regDate}</div>
                  </div>
                  <div className="news_summary_section">
                    <div>{item.summary}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommendation_News;
