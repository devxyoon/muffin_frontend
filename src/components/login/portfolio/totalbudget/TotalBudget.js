import React, { useState, useEffect } from "react";
import axios from "axios";
import "./totalbudget.style.css";

const TotalBudget = () => {
  const [asset, setAsset] = useState({
    totalAsset: 0,
    earnigsRatio: 0,
    profitLoss: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/assets/total`)
      .then((response) => {
        console.log(`${JSON.stringify(response)}`);
        setAsset(response.data);
      })
      .catch((error) => {
        console.log(`TotalBudget useEffect catch`);
        throw error;
      });
  }, []);

  return (
    <>
      <div>
        <div className="totalbudget_section">
          <div>
            <div className="my_totlabudget_title"> 내 자산총액</div>
            <div className="my_totlabudget_money">{asset.totalAsset}원</div>
          </div>
          <div className="my_rate">
            <div className="money">
              <span>평가 수익률</span>
              <span> : {asset.earnigsRatio}%</span>
            </div>

            <div className="money">
              <span>평가 손익</span>
              <span className="won"> : {asset.profitLoss}원</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalBudget;
