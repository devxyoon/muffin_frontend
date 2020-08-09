import React, { useState } from "react";
import { BudgetHistory, TotalBudget, HoldingShares } from "./index";
import "./portfoliopage.style.css";

const PortfolioPage = () => {
  const portfolioContent = [
    { title: "보유종목", content: <HoldingShares /> },
    { title: "거래내역", content: <BudgetHistory /> },
  ];

  const useTabs = (initialTabs, allTabs) => {
    const [portfolioContentIndex, setPortfolioContentIndex] = useState(
      initialTabs
    );
    return {
      portfolioContentItem: allTabs[portfolioContentIndex],
      portfolioContentChange: setPortfolioContentIndex,
    };
  };
  const { portfolioContentItem, portfolioContentChange } = useTabs(
    0,
    portfolioContent
  );
  return (
    <div>
      <div className="documentroom_container">
        <div className="documentroom_text">포트폴리오</div>
        <TotalBudget />
        <div className="tab_portfolio_container">
          {portfolioContent.map((section, index) => (
            <button
              onClick={() => portfolioContentChange(index)}
              className="link-list-tab"
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="tab_portfolio_content_container">
          {portfolioContentItem.content}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
