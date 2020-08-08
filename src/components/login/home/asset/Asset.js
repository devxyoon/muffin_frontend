import React from "react";
import "./asset.style.css";

const Asset = () => {
  return (
    <div>
      <div className="asset_title_section">
        <div className="my_asset_title"> 내 자산총액</div>
        <div className="today">2020-08-07</div>
      </div>

      <div className="my_money">10,000,000원</div>
      <div>
        <div className="money">
          <span>평가 수익률</span>
          <span> : 0.00%</span>
        </div>

        <div className="money">
          <span>평가 손익</span>
          <span className="won"> : 0원</span>
        </div>
      </div>
    </div>
  );
};

export default Asset;
