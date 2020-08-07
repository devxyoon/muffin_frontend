import React from "react";
import { Link } from "react-router-dom";
import kakao from "../../../../assets/signIn/kakao.png";
import {
  SignInContainer,
  LoginContainer,
  SignInHeader,
  InputGroup,
  Row,
  Label,
  WarnId,
  InputBorder,
  LoginInput,
  WarnPassword,
  LoginLinkContainer,
  OriginLoginBtn,
} from "./signin.style";

const SignIn = () => {
  return (
    <SignInContainer>
      <LoginContainer>
        <SignInHeader>로그인</SignInHeader>
        <InputGroup>
          <Row>
            <Label>아이디</Label>
            <WarnId id="warnId">*이메일이 올바르지 않습니다.</WarnId>
          </Row>
          <InputBorder>
            <LoginInput
              type="text"
              name="email"
              placeholder="이메일 형식의 아이디를 입력해주세요"
            />
          </InputBorder>
        </InputGroup>

        <InputGroup>
          <Row>
            <Label>비밀번호</Label>
            <WarnPassword id="warnPwd">
              * 비밀번호가 올바르지 않습니다.
            </WarnPassword>
          </Row>
          <InputBorder>
            <LoginInput name="password" placeholder="비밀번호를 입력해주세요" />
          </InputBorder>
        </InputGroup>

        <LoginLinkContainer>
          <Link to="/home">
            <OriginLoginBtn>로그인</OriginLoginBtn>
          </Link>
        </LoginLinkContainer>
      </LoginContainer>
    </SignInContainer>
  );
};

export default SignIn;
