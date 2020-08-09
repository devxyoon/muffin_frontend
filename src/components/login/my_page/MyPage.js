import React from "react";
import InvestProfile from "./invest_profile/InvestProfile";
import AccountSetting from "./account_setting/AccountSetting";

const MyPage = () => {
  return (
    <div>
      <div className="documentroom_container">
        <div className="documentroom_text">마이페이지</div>
        <InvestProfile />
        <AccountSetting />
      </div>
    </div>
  );
};

export default MyPage;
