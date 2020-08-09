import React from "react";
import "./recommendation_stock.style.css";
import { Link } from "react-router-dom";

const RecommendationStock = () => {
  return (
    <div className="recommendation_stock_container">
      <div className="stock_detail_section_01">
        <Link to="/stock/detail">
          <div className="stock_title_section">삼성전자</div>
        </Link>
        <div className="down">
          <div className="stock_column_section">57,500</div>
          <div className="stock_column_section">▼ 500</div>
          <div className="stock_column_section">-0.86%</div>
        </div>
      </div>
      <div className="stock_detail_section_01">
        <div className="stock_title_section">SK하이닉스</div>
        <div className="down">
          <div className="stock_column_section">80,600</div>
          <div className="stock_column_section">▼ 500</div>
          <div className="stock_column_section">-0.62%</div>
        </div>
      </div>
      <div className="stock_detail_section_01">
        <div className="stock_title_section">LG화학</div>
        <div className="up">
          <div className="stock_column_section">746,000</div>
          <div className="stock_column_section">▲ 66,000</div>
          <div className="stock_column_section">+9.71%</div>
        </div>
      </div>
      <div className="stock_detail_section_01">
        <div className="stock_title_section">NAVER</div>
        <div className="down">
          <div className="stock_column_section">314,000</div>
          <div className="stock_column_section">▼ 8,000</div>
          <div className="stock_column_section">-2.48%</div>
        </div>
      </div>
      <div className="stock_detail_section_01">
        <div className="stock_title_section">삼성SDI</div>
        <div className="up">
          <div className="stock_column_section">488,000</div>
          <div className="stock_column_section">▲ 18,500</div>
          <div className="stock_column_section">+3.94%</div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationStock;
