import React from "react";
import { Link } from "react-router-dom";

const AccountSetting = () => {
  return (
    <div>
      <div className="inner-container2">
        <div className="login-container">
          <div className="input-group2">
            <div className="label-div">
              <div className="label">이름</div>
            </div>
            <div
              style={{
                fontSize: "14px",
                paddingLeft: "10px",
                paddingTop: "3px",
              }}
            >
              홍길동
            </div>
          </div>

          <div className="input-group2">
            <div className="label-div">
              <div className="label">아이디 </div>
            </div>

            <div
              style={{
                fontSize: "14px",
                paddingLeft: "10px",
                paddingTop: "3px",
              }}
            >
              pringles@naver.com
            </div>
          </div>

          <div className="input-group2">
            <div className="label-div">
              <div className="label">닉네임 </div>
            </div>

            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="다른 사용자에게 보일 닉네임을 입력하세요"
            />
          </div>

          <div className="input-group2">
            <div className="label-div">
              <div className="label">비밀번호 </div>
            </div>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="영문 및 숫자를 포함하여 8자 이상으로 입력하세요"
            />
          </div>

          <Link to="/mypage">
            <button className="join-btn">수정하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
