import React, { useState } from "react";
import "./signup.style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmailId = (e) => setEmailId(e.target.value);
  const onChangeNickname = (e) => setNickname(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const headers = {
    authorization: "JWT fefege..",
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const onClick = (e) => {
    console.log("회원가입 선택");
    console.log("이름 : " + name);
    console.log("아이디 : " + emailId);
    console.log("닉네임 : " + nickname);
    console.log("패스워드 : " + password);
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/users/signUp`,
        {
          name: name,
          emailId: emailId,
          nickname: nickname,
          password: password,
        },
        headers
      )
      .then((response) => {
        sessionStorage.setItem("sessionUser", emailId);
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div className="inner-container2">
      <div className="login-container">
        <div className="header2">회원가입</div>
        <div className="input-group2">
          <div className="label-div">
            <div className="label">이름</div>
            <div className="star">*</div>
            <div className="green-message">* 문항은 필수 입력사항입니다</div>
          </div>
          <input
            type="text"
            name="name"
            className="login-input"
            placeholder="이름을 입력하세요"
            onChange={onChangeName}
          />
        </div>

        <div className="input-group2">
          <div className="label-div">
            <div className="label">아이디 </div>
            <div className="star">*</div>
          </div>

          <input
            type="text"
            name="emailId"
            className="login-input"
            placeholder="이메일 형태의 아이디를 입력하세요"
            onChange={onChangeEmailId}
          />
        </div>

        <div className="input-group2">
          <div className="label-div">
            <div className="label">닉네임 </div>
          </div>

          <input
            type="text"
            name="nickname"
            className="login-input"
            placeholder="다른 사용자에게 보일 닉네임을 입력하세요"
            onChange={onChangeNickname}
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
            onChange={onChangePassword}
          />
        </div>

        <Link to="/">
          <button className="join-btn" onClick={onClick}>
            가입하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
