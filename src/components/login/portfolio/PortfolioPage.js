import React from "react";
import {BudgetHistory, TotalBudget, HoldingShares} from "./index";
import { UnderlinedTabs } from "../items";
import "../items/underlinedTabs.css";

const PortfolioPage = () => {
    return <>
        <TotalBudget/>
        <UnderlinedTabs tabs={[{index: 1, content: <HoldingShares/>, title: "보유한 종목"},
                          {index: 2, content: <BudgetHistory/>, title: "거래 내역"}]}/>
    </>
}

export default PortfolioPage;