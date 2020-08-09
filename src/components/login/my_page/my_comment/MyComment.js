import React from "react";
import { Link } from "react-router-dom";
import "./myComment.style.css";

const MyComment = () => {
  return (
    <div>
      <div className="documentroom_container">
        <div className="documentroom_table">
          <div className="table_head">
            <div className="table_my_comment_head_text1">댓글</div>
            <div className="table_my_comment_head_text2">등록날짜</div>
          </div>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>
          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>
          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
              </ul>
            </li>
          </ul>

          <ul className="post-ul">
            <li className="post-li">
              <ul className="post-row-list">
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item1">
                    금 시세는 어디까지 상승할 것인가
                  </li>
                </Link>
                <Link to="/opinion/detail">
                  <li className="post-my_row-list-item2">원문보기▶</li>
                </Link>
                <li className="post-my_row-list-item3">2020-08-08</li>
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

export default MyComment;
