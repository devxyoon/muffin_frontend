import React, { useState } from "react";
import "./stockDetail.css";
import Modal from "react-modal";

const StockDetail = () => {
  const [count, setCount] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  const decrease = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  const increase = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const modalStyle = {
    content: {
      width: "300px",
      height: "400px",
    },
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} style={modalStyle}>
        <span className="text-base" style={{ "margin-right": "8px" }}>
          현재가
        </span>
        <span className="text-xl ">123,320원</span> <br />
        <span className="text-base" style={{ "margin-right": "8px" }}>
          매입가
        </span>
        <span className="text-xl ">123,320원</span>
        <h1>{count} 주</h1>
        <div>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={decrease}
          >
            {" "}
            -1{" "}
          </button>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={increase}
          >
            {" "}
            +1{" "}
          </button>
        </div>
        <tr>
          <td>
            <button
              className="btn btn-default btn-blue text-white btn-rounded"
              onClick={closeModal}
            >
              취소
            </button>
          </td>
          <td>
            <button
              className="btn btn-default btn-red text-white btn-rounded"
              onClick={closeModal}
            >
              매수
            </button>
          </td>
        </tr>
      </Modal>
      <table className="stock_table w-full">
        <tr className="line_setting_1">
          <td>
            <span className="stock_name">삼성증권</span>
            <span className="stock_code">(024832)</span>
          </td>
          <td>
            <span className={"text-xs"}>2020.08.21 기준</span>
          </td>
          <td>
            <button
              className="btn btn-default text-white btn-red btn-rounded btn-icon mystock"
              onClick={openModal}
            >
              <span>매도</span>
            </button>
            <button
              className="btn btn-default text-white btn-blue btn-rounded btn-icon mystock"
              onClick={openModal}
            >
              <span>매수</span>
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
