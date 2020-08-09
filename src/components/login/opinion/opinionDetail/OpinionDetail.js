import React, { Component } from "react";
import "./opinionDetail.style.css";

class OpinionDetail extends Component {
  render() {
    return (
      <div>
        <div className="documentdetaildiv">
          <div className="documentDetailTitle">
            <div className="Title1">금 시세는 어디까지 상승할 것인가</div>
            <div className="Title2">2020-08-06 20:47</div>
          </div>
        </div>
        <div className="authority">작성자 : Vintage</div>
        <div className="contentdetaildiv">
          <div className="detail_content_01">
            최근 미국 주식 시장 내 핫한 스팩 (SPAC) 관련 기업 후보 중
            개인적으로도 투자 관심이 집중되는 2개의 기업에 대한 지난 주말 나름의
            기업 탐구의 시간을 가졌습니다. 이번 분석글에서는 미 희토류 기업, 'MP
            머티리얼스(MP Materials)'이 지난 2020년 7월 15일 공개한 스팩 거래
            관련 프레젠테이션 자료에 대한 리뷰 시간으로 마련했습니다.
          </div>
          <img
            src="https://cdn.snek.ai/article/2020/07/4fomontznxp4xv2j30t2n8uj1d3avkolqiqnlz9duyjfkj33.png"
            width="50%"
            className="detail_content_01"
          />
          <div className="detail_content_01">
            이번 분석글 관련하여 도움이 될 수 있는 SNEK을 통해 앞서 공유한 스팩
            관련 종합 분석글과 지난 2020년 7월 MP 머티리얼스와 포트리스 기업 간
            스팩 거래 관련 투자 설명회 자료 원문 링크를 아래와 같이
            공유드립니다.
          </div>
          <div className="detail_content_01">
            중국을 제외한 북미 희토류 업계 장악을 위한 치열한 경합이 예상되는
            주요 라이벌 기업과의 비교 분석을 다룬 슬라이드입니다. MP
            머티리얼스의 넘사벽 경쟁력을 투자자들에게 어필하는 부분이라고 할 수
            있습니다.(물론 MP 머티리얼스가 작성한 투자 자료이기에 당연히 자사의
            경쟁력을 매력적으로 어필한다는 점을 감안해야 할 것) 우선 왼쪽부터
            순서대로 3개 기업(Ucore Rare Earth, Texas Mineral Resources, Rare
            Element Resources)은 미국 희토류 기업들은 대부분이
            그린필드(Greenfield)에 속했다는 점에서 여전히 ‘희토류 생산 및
            상용화’를 위한 갈 길이 멀다는 점에서 이미 MP 머티리얼스와의 경쟁에서
            밀린다는 분석입니다. Lynas(호주 기업)는 그나마
            브라운필드(Brownfield)에 속하기는 했으나, 여전히 연간 희토류
            생산량에서 MP 머티리얼스의 생산 수준에 훨씬 못 미친다는 자체
            분석입니다.
          </div>
        </div>
        <ul className="commentdiv">
          <li className="comment-li">
            <ul className="comment-row-list">
              <li className="comment-row-list-item1">배고픈거북이</li>
              <li className="comment-row-list-item2">좋은 정보 감사합니다.</li>
              <li className="comment-row-list-item3">2020-08-08 10:10</li>
            </ul>
          </li>
        </ul>
        <ul className="commentdiv">
          <li className="comment-li">
            <ul className="comment-row-list">
              <li className="comment-row-list-item1">귀여운강아지</li>
              <li className="comment-row-list-item2">
                집값 문제로 온 나라가 뜨겁다.
              </li>
              <li className="comment-row-list-item3">2020-08-08 10:43</li>
            </ul>
          </li>
        </ul>
        <input className="comment_input" />
        <button className="comment_button">댓글달기</button>
      </div>
    );
  }
}

export default OpinionDetail;
