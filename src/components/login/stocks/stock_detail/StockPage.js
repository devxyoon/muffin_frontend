import React from "react";
import { CandleChart, StockDetail } from "../index";

const StockPage = () => {
  return (
    <>
      <div style={{ width: "1100px" }}>
        <StockDetail />
        <div>
          <CandleChart />
        </div>
      </div>
    </>
  );
};

export default StockPage;
