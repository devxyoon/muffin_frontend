import React from "react";
import { Link } from "react-router-dom";
import "./myOpinion.style.css";

const MyOpinion = () => {
  return (
    <div>
      <div className="documentroom_container">
        <div className="documentroom_table">
          <div className="table_head">
            <div className="table_my_head_text1">제목</div>
            <div className="table_my_head_text2">등록날짜</div>
          </div>
          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-row-list-item2">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>
          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  유명 헤지펀드, 그린라이트 캐피탈의 2020년 2분기 투자 서한
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  [IPO시리즈] 8월6일 상장, 의료기기 기업 '이루다'
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  105살 보잉 (Boeing)을 능가하고 있는 19살 "스페이스X (SpaceX)"
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  바이오계의 테슬라? '슈뢰딩거'를 알아보자
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  SPAC의 새 역사를 쓰고 있는 유명 투자가, '빌 애크만 (Bill
                  Ackman)'
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  풍력 Value Chain의 히든카드! - 세아제강
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  제빵 1위 기업, 'SPC삼립'
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  구독 경제에 숟가락 얻는 'Apple (AAPL)', 그러나 명확한 한계점
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item2">
                  22년 전 마이크로소프트를 떠올리게 만든 미국 '빅 4' 테크 기업
                  반독점 청문회
                </li>
                <li className="post-row-list-item4">2020-08-08</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="pagination-div">
          <div className="pagination">
            <Link to={`?pageNo=1`} className="page_button" id="1">
              1
            </Link>
            <Link to={`?pageNo=2`} className="page_button" id="2">
              2
            </Link>
            <Link to={`?pageNo=3`} className="page_button" id="3">
              3
            </Link>
            <Link to={`?pageNo=4`} className="page_button" id="4">
              4
            </Link>
            <Link to={`?pageNo=5`} className="page_button" id="5">
              5
            </Link>

            <Link to={`?pageNo=6`} className="page_button" id="next">
              다음
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOpinion;
