import React from "react";
import "./signup.style.css";
import { Link } from "react-router-dom";
import Navbar from "../../non_login_navbar/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <div className="inner-container2">
            <div className="login-container">
              <div className="header2">회원가입</div>
              <div className="input-group2">
                <div className="label-div">
                  <div className="label">이름</div>
                  <div className="star">*</div>
                  <div className="green-message">
                    * 문항은 필수 입력사항입니다
                  </div>
                </div>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div className="input-group2">
                <div className="label-div">
                  <div className="label">아이디 </div>
                  <div className="star">*</div>
                </div>

                <input
                  type="text"
                  name="email"
                  className="login-input"
                  placeholder="이메일 형태의 아이디를 입력하세요"
                />
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
                  <div className="star">*</div>
                </div>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="영문 및 숫자를 포함하여 8자 이상으로 입력하세요"
                />
              </div>

              <Link to="/auth/InvestProfile">
                <button className="join-btn">가입하기</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
