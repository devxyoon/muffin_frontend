import React from "react";
import "./opinionList.style.css";
import { Link } from "react-router-dom";

const OpinionList = () => {
  return (
    <div>
      <div className="documentroom_container">
        <div className="documentroom_text">오피니언</div>

        <div className="documentroom_table">
          <div className="table_head">
            <div className="table_head_text1">No.</div>
            <div className="table_head_text2">제목</div>
            <div className="table_head_text3">작성자</div>
            <div className="table_head_text4">등록날짜</div>
            <div className="table_head_text4">조회수</div>
          </div>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">10</li>
                <Link to="/opinion/detail">
                  <li className="post-row-list-item2">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>

                <li className="post-row-list-item3">Vintage</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">2784</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">9</li>
                <li className="post-row-list-item2">
                  유명 헤지펀드, 그린라이트 캐피탈의 2020년 2분기 투자 서한
                </li>
                <li className="post-row-list-item3">이관우</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">3193</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">8</li>
                <li className="post-row-list-item2">
                  [IPO시리즈] 8월6일 상장, 의료기기 기업 '이루다'
                </li>
                <li className="post-row-list-item3">lee pro</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">6461</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">7</li>
                <li className="post-row-list-item2">
                  105살 보잉 (Boeing)을 능가하고 있는 19살 "스페이스X (SpaceX)"
                </li>
                <li className="post-row-list-item3">이관우</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">9476</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">6</li>
                <li className="post-row-list-item2">
                  바이오계의 테슬라? '슈뢰딩거'를 알아보자
                </li>
                <li className="post-row-list-item3">MeroVanco</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">10475</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">5</li>
                <li className="post-row-list-item2">
                  SPAC의 새 역사를 쓰고 있는 유명 투자가, '빌 애크만 (Bill
                  Ackman)'
                </li>
                <li className="post-row-list-item3">이관우</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">8871</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">4</li>
                <li className="post-row-list-item2">
                  풍력 Value Chain의 히든카드! - 세아제강
                </li>
                <li className="post-row-list-item3">머니마블</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">16042</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">3</li>
                <li className="post-row-list-item2">
                  제빵 1위 기업, 'SPC삼립'
                </li>
                <li className="post-row-list-item3">재무제표 읽는 남자</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">11227</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">2</li>
                <li className="post-row-list-item2">
                  구독 경제에 숟가락 얻는 'Apple (AAPL)', 그러나 명확한 한계점
                </li>
                <li className="post-row-list-item3">성륜수</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">20530</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <li className="post-row-list-item1">1</li>
                <li className="post-row-list-item2">
                  22년 전 마이크로소프트를 떠올리게 만든 미국 '빅 4' 테크 기업
                  반독점 청문회
                </li>
                <li className="post-row-list-item3">이관우</li>
                <li className="post-row-list-item4">2020-08-08</li>
                <li className="post-row-list-item5">10442</li>
              </ul>
            </li>
          </ul>
          <Link to="/opinion/write" className="write_button">
            글쓰기
          </Link>
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

        <div className="conference_search">
          <select className="search_select">
            <option className="search_option" value="제목">
              제목
            </option>
            <option className="search_option" value="작성자">
              작성자
            </option>
          </select>

          <input
            placeholder="제목이나 작성자를 입력하세요"
            className="search_input"
          />
          <Link to="" className="search_button">
            검색
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpinionList;
