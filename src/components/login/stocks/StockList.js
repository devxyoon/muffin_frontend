import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./stockList.css";
import Modal from "react-modal";

export const getStockList = (data) => ({
  type: "GET_STOCKS_LIST",
  payload: data,
});

export const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_STOCKS_LIST":
      return action.payload;
    default:
      return state;
  }
};

export const stockList = () => (dispatch) => {
  axios
    .get(``)
    .then((response) => {
      console.log(`stockList reducer THEN`);
      dispatch(getStockList(response.data));
    })
    .catch((error) => {
      console.log(`stockList reducer CATCH`);
    });
};

const StockList = () => {
  const [stockName, setStockName] = useState("씨젠");
  const [price, setPrice] = useState("310,600");
  const [change, setChange] = useState("+32,000");
  const [changePercentage, setChangePercentage] = useState("+11.84%");
  const [marketCap, setMarketCap] = useState("79,923(억)");
  const [volumeCurrency, setVolumeCurrency] = useState("43,589,400");
  const [arr, setArr] = useState([
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
    {
      stockName: stockName,
      price: price,
      change: change,
      changePercentage: changePercentage,
      marketCap: marketCap,
      volumeCurrency: volumeCurrency,
    },
  ]);

  const linktoDetail = (e) => {
    e.preventDefault();
  };

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
      <div className="documentroom_container">
        <div className="documentroom_text">투자</div>
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
        <div className="w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
          <table className="table documentroom_table w-full">
            <thead>
              <tr>
                <th>종목</th>
                <th>시세</th>
                <th>전일비</th>
                <th>등락률</th>
                <th>시가 총액</th>
                <th>거래량</th>
                <th>거래하기</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item) => (
                <tr onClick={linktoDetail}>
                  <td>
                    <Link to="stock/detail">{item.stockName}</Link>
                  </td>

                  <td>{item.price}</td>
                  <td>{item.change}</td>
                  <td>{item.changePercentage}</td>
                  <td>{item.marketCap}</td>
                  <td>{item.volumeCurrency}</td>
                  <td>
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
              ))}
            </tbody>
          </table>
          <div className="pagination-div">
            <div className="pagination">
              <Link to={`?pageNo=1`} className="page_button" id="1">
                1
              </Link>
              <Link to={`?pageNo=2`} className="page_button" id="2">
                2
              </Link>
              <Link to={`?pageNo=3`} className="page_button" id="3">
                3
              </Link>
              <Link to={`?pageNo=4`} className="page_button" id="4">
                4
              </Link>
              <Link to={`?pageNo=5`} className="page_button" id="5">
                5
              </Link>

              <Link to={`?pageNo=6`} className="page_button" id="next">
                다음
              </Link>
            </div>
          </div>
          <div className="conference_search">
            <input
              placeholder="주식 종목을 입력해주세요."
              className="search_input"
            />
            <Link to="" className="search_button">
              검색
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockList;
