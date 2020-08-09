import React, { useState } from "react";
import Modal from "react-modal";
import "./holdingShares.style.css";

const HoldingShares = () => {
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
      <table className="w-full_holding">
        <tr>
          <td>
            <div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <tr className="tr_height_title">
                    <td style={{ "min-width": "200px" }}>
                      <span className="shares_title">삼성전자</span>
                      <span
                        className="text-sm"
                        style={{
                          "margin-left": "20px",
                          verticalAlign: "bottom",
                        }}
                      >
                        003248
                      </span>
                    </td>
                    <td className="btn_section">
                      <button
                        className="btn btn-default btn-blue text-white btn-rounded"
                        onClick={openModal}
                      >
                        매수
                      </button>
                      <button
                        className="btn btn-default btn-red text-white btn-rounded"
                        onClick={openModal}
                      >
                        매도
                      </button>
                    </td>
                  </tr>
                  <tr className="tr_height">
                    <td style={{ width: "200px" }}>
                      <span className="td_margin">잔고</span>
                      <span className="td_won_font">32주</span>
                    </td>
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin">손익</span>
                      <span className="td_won_font">2389238 원</span>
                    </td>
                  </tr>
                  <tr className="tr_height">
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_2">평가 금액</span>
                      <span className="td_won_font">123,320원</span>
                    </td>
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_3">수익률</span>
                      <span className="td_won_font">32.59%</span>
                    </td>
                  </tr>
                  <tr className="tr_height">
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_3">매입가</span>
                      <span className="td_won_font">123,320원</span>
                    </td>
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_3">현재가</span>
                      <span className="td_won_font">123,320원</span>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};

export default HoldingShares;
