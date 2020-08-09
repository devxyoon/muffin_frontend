import React from "react";
import { Link } from "react-router-dom";

const InvestProfile = () => {
  return (
    <div className="authCheck_container">
      <div className="authCheck_texts_div">
        <div className="invest_text">투자스타일을 선택해주세요.</div>
        <div className="authCheck_num_div">
          <span className="auth_container">
            <input type="radio" value="0" name="invest_style" />
            <span className="auth_span"> </span>
            <span>초단기(1개월↓)</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_style" />
            <span className="auth_span"> </span>
            <span>단기(1개월~6개월)</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_style" />
            <span className="auth_span"> </span>
            <span>중기(6개월~1년)</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_style" />
            <span className="auth_span"> </span>
            <span>중장기(1년~3년)</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_style" />
            <span className="auth_span"> </span>
            <span>장기(3년↑)</span>
          </span>
        </div>
      </div>
      <div className="authCheck_texts_div">
        <div className="invest_text">투자성향을 선택해주세요.</div>
        <div className="authCheck_num_div">
          <span className="auth_container">
            <input type="radio" value="0" name="invest_character" />
            <span className="auth_span"> </span>
            <span>공격투자형</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_character" />
            <span className="auth_span"> </span>
            <span>적극투자형</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_character" />
            <span className="auth_span"> </span>
            <span>위험중립형</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_character" />
            <span className="auth_span"> </span>
            <span>안정추구형</span>
          </span>
          <span className="auth_container">
            <input type="radio" value="1" name="invest_character" />
            <span className="auth_span"> </span>
            <span>안정형</span>
          </span>
        </div>
      </div>
      <Link to="/mypage" style={{ textDecoration: "none" }}>
        <button className="start_cameleon">수정하기</button>
      </Link>
    </div>
  );
};

export default InvestProfile;
