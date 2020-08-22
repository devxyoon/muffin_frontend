import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./budgetHistory.style.css";
import axios from "axios";

const BudgetHistory = ({ holding, setHolding }) => {
  const [pageArr, setPageArr] = useState([]);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(1);

  const clickNext = () => {
    getAll(pageArr[0] + 5, range + 1);
  };
  const clickPrev = () => {
    getAll(pageArr[0] - 1, range - 1);
  };
  const getAll = (page, range) => {
    setPage(page);
    setRange(range);
    setPageArr([]);
    setHolding([]);
    axios
      .get(`http://localhost:8080/assets/pagination/${page}/${range}`)
      .then((response) => {
        console.log(
          `${JSON.stringify(
            response.data
          )}   :    /assets/pagination/${page}/${range}`
        );
        response.data.list.map((item) => {
          setHolding((holding) => [...holding, item]);
        });
        let i = 0;
        const startPage = response.data.pagination.startPage;
        const endPage = response.data.pagination.endPage;
        if (
          response.data.pagination.pageCnt <
          startPage + response.data.pagination.rangeSize
        ) {
          for (i; i < response.data.pagination.pageCnt - startPage + 1; i++)
            setPageArr((pageArr) => [...pageArr, startPage + i]);
        } else {
          for (i; i < response.data.pagination.rangeSize; i++)
            setPageArr((pageArr) => [...pageArr, startPage + i]);
        }
        setPrev(response.data.pagination.prev);
        setNext(response.data.pagination.next);
      })
      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    getAll(1, 1);
  }, []);

  return (
    <>
      <table className="w-full table">
        <thead>
          <tr>
            <th>거래날짜</th>
            <th>종목</th>
            <th>거래 종류</th>
            <th>금액</th>
            <th>잔액</th>
          </tr>
        </thead>
        <tbody>
          {holding.map((item) => (
            <tr>
              <td>{item.transactionDate}</td>
              <td>{item.stockName}</td>
              <td>{item.transactionType}</td>
              <td>{item.purchasePrice}</td>
              <td>{item.totalAsset}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tab_portfolio_content_container">
        <div className="pagination-div">
          <div className="pagination">
            {prev && (
              <div className="page_button" id="prev" onClick={clickPrev}>
                이전
              </div>
            )}

            {pageArr.map((pagenum) => (
              <div
                className="page_button"
                key={pagenum}
                onClick={() => {
                  getAll(pagenum, range);
                }}
              >
                {pagenum}
              </div>
            ))}

            {next && (
              <div className="page_button" id="next" onClick={clickNext}>
                다음
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetHistory;
