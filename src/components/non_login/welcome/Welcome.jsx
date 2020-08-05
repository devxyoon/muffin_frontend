import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { slideInUp } from "react-animations";
import MainIcon from "../../../assets/home/home_main.png";
import {
  DivideLine,
  Title,
  BoldTitle,
  BoldGreenTitle,
  Row,
  Content,
  StartBtn,
  Show1Div,
  Show2Div,
  TemplateBlock,
} from "./welcome.style";

const Welcome = () => {
  return (
    <TemplateBlock>
      <Row style={{ position: "absolute" }}>
        <Show1Div>
          <DivideLine />
          <Title>텍스트 마이닝과 </Title>
          <Title>추천 알고리즘을 활용한</Title>
          <Row>
            <BoldTitle>경제 미디어 플랫폼,</BoldTitle>
          </Row>
          <Row>
            <BoldGreenTitle>Muffin</BoldGreenTitle>
          </Row>

          <Content>
            기술이 도입된 화상회의는 참여자들의 반응을 파악하고, 회의 결과에
            반영하는 과정을 자동화하여 보다 더 효율적인 업무 처리를 도와줍니다.
          </Content>
          <Link to="/auth/signUp">
            <StartBtn>Muffin 처음 시작하기</StartBtn>
          </Link>
          <div>
            <Link to="/auth/signIn">
              <StartBtn>로그인하러 가기</StartBtn>
            </Link>
          </div>
        </Show1Div>
        <Show2Div>
          <img
            width="687px"
            height="687px"
            src={MainIcon}
            style={{ marginTop: "50px" }}
          />
        </Show2Div>
      </Row>
    </TemplateBlock>
  );
};

export default Welcome;
