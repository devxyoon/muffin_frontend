import React from "react";
import { CandleChart, StockDetail } from "./index";

const StockPage = () => {
  return (
    <>
      <div>
        <StockDetail />
        <div>
          <CandleChart />
        </div>
      </div>
    </>
  );
};

export default StockPage;
