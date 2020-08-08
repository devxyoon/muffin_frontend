import React from "react";
import "./stockDetail.css";

const StockDetail = () => {
  return (
    <>
      <table className="stock_table">
        <tr className="line_setting_1">
          <td>
            <span className="stock_name">삼성증권</span>
            <span className="stock_code">(024832)</span>
          </td>
          <td>
            <span className={"text-xs"}>2020.08.21 기준</span>
          </td>
          <td>
            <button className="btn btn-default text-white btn-blue btn-rounded btn-icon mystock">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-current mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>매수하기</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="stock_name">34,291</div>
                  <div className="text-xs font-light text-grey-500">
                    전일대비 🔼 390 | + 0.93%
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td colSpan={2}>
            <div className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90 card_second">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <table className="line_setting_2">
                    <tr>
                      <td className="card_grid">
                        <span className="text-xs font-light text-grey-500 stocks_data">
                          전일
                        </span>
                        <span className="text-xl font-bold text_row">
                          34,291
                        </span>
                        <br />
                        <span className="text-xs font-light text-grey-500 stocks_data">
                          시가
                        </span>
                        <span className="text-xl font-bold">34,291</span>
                      </td>
                      <td className="card_grid">
                        <span className="text-xs font-light text-grey-500 stocks_data">
                          고가
                        </span>
                        <span className="text-xl font-bold text_row">
                          34,291
                        </span>
                        <br />
                        <span className="text-xs font-light text-grey-500 stocks_data">
                          저가
                        </span>
                        <span className="text-xl font-bold">34,291</span>
                      </td>
                      <td>
                        <span className="text-xs font-light text-grey-500 stocks_data">
                          거래량
                        </span>
                        <span className="text-xl font-bold text_row">
                          34,291
                        </span>
                        <br />
                        <span className="text-xs font-light text-grey-500 stocks_data">
                          거래대금
                        </span>
                        <span className="text-xl font-bold">34,291</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};

export default StockDetail;
