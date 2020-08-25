import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import "./modal.style.css";
import axios from "axios";
import { AssetContext } from "../../../context";
const ModalBuying = (props) => {
  const url = "http://localhost:8080/assets/";
  const [assetId] = useState(props.ownedAsset.assetId);
  const [stockName] = useState(props.ownedAsset.stockName);
  const [symbol] = useState(
    props.ownedAsset.symbol != null
      ? props.ownedAsset.symbol
      : props.stockOne.symbol
  );
  const [nowPrice] = useState(
    props.ownedAsset.nowPrice != null
      ? props.ownedAsset.nowPrice
      : props.stockOne.now
  );
  // const [shareCount, setShareCount] = useState((props.asset.shareCount != null) ? props.asset.shareCount : 1 );
  // const [totalAmount] = useState((props.asset[0].totalAsset != null) ? props.asset[0].totalAsset : 999);
  const [transactionDate, setTransactionDate] = useState(new Date()); // 거래날짜
  const [purchasePrice, setPurchasePrice] = useState(nowPrice); // ㄴ=
  const [transactionType] = useState("매수"); // 매수매도
  const { asset, setAsset } = useContext(AssetContext);
  const [matchedUserStocks, setMatechedUserStock] = useState({});
  const [totalAmount, setTotalAmount] = useState(0); // 내가 갖고있는 총 금액
  const [buyCount, setBuyCount] = useState(1); //
  const [buyAmount, setBuyAmount] = useState(1); // 내가 사려는 돈
  useEffect(() => {
    // if(asset[0])console.log(totalAmount);

    for (let i = 0; i < asset.length; i++) {
      console.log(asset.length);
      console.log(props.stockOne.stockName);
      console.log(asset[i].stockName);
      console.log(asset[i]);
      if (asset[i].stockName == props.stockOne.stockName) {
        setMatechedUserStock(asset[i]);
        setTotalAmount(matchedUserStocks.totalAsset);
        console.log("/////////");
      }
    }
  }, [matchedUserStocks]);
  useEffect(() => {
    setTotalAmount(matchedUserStocks.totalAsset);
    console.log(totalAmount);
  }, [matchedUserStocks]);
  useEffect(() => {
    console.log({ totalAmount });
  }, [totalAmount]);
  const decrease = (e) => {
    e.preventDefault();
    if (buyCount > 1) {
      setBuyCount(buyCount - 1);
      setPurchasePrice((buyCount - 1) * nowPrice);
    } else {
      alert("올바른 수량을 입력하세요.");
    }
  };
  const increase = (e) => {
    e.preventDefault();
    console.log(`buyCount : ${buyCount}`);
    console.log(`buyAmount : ${buyAmount}`);
    setBuyAmount((buyCount + 1) * nowPrice);
    console.log(buyAmount);
    console.log(totalAmount);
    if (totalAmount >= buyAmount) {
      console.log({ totalAmount });
      console.log(buyCount);
      console.log(buyAmount);
      setBuyCount(buyCount + 1);
      setPurchasePrice(buyAmount);
      console.log({ totalAmount });
      console.log(buyCount);
      console.log(buyAmount);
    } else {
      alert("돈이 부족합니다.");
    }
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/assets/holdingCount/${
          JSON.parse(sessionStorage.getItem("logined_user")).userId
        }`
      )
      .then((response) => {
        setAsset(response.data.holdingCount);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  const submitTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      userId: JSON.parse(sessionStorage.getItem("logined_user")).userId,
      assetId: assetId,
      stockName: stockName,
      symbol: symbol,
      shareCount: buyCount,
      nowPrice: nowPrice,
      purchasePrice: purchasePrice,
      transactionDate: new Date().toLocaleDateString(),
      transactionType: transactionType,
    };
    console.log(
      `~~~~buy~~~~~~~transactionType : ${transactionType}, stockName : ${stockName} ,buyCount : ${buyCount}, purchasePrice : ${purchasePrice}, 거래일 : ${transactionDate}`
    );
    axios
      .post(
        url +
          `buy/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`,
        newTransaction
      )
      .then((response) => {
        console.log(`ModalSelling axios then`);
        console.log(response);
        setAsset(response.data);
        setBuyCount(1);
        setPurchasePrice(nowPrice);
        props.isClose(false);
      })
      .catch((error) => {
        console.log(`ModalSelling axios catch`);
        throw error;
      });
  };
  const modalStyle = {
    content: {
      width: "300px",
      height: "400px",
    },
  };
  return (
    <>
      <Modal {...props} style={modalStyle}>
        <span className="text_small ">{stockName}</span> <br />
        <span className="text_small" style={{ marginRight: "8px" }}>
          현재가
        </span>
        <span className="text_small ">{nowPrice} 원</span> <br />
        <span className="text_small" style={{ marginRight: "8px" }}>
          매수가
        </span>
        <span className="text_small ">{purchasePrice} 원</span>
        <div className="text_middle_bold">{buyCount} 주</div>
        <div>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={decrease}
          >
            -1
          </button>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={increase}
          >
            +1
          </button>
        </div>
        <tr>
          <td>
            <button
              className="btn btn-default btn-gray btn-rounded"
              onClick={() => props.isClose()}
            >
              취소
            </button>
          </td>
          <td>
            <button
              className="btn btn-default btn-blue btn-rounded"
              onClick={submitTransaction}
            >
              매수
            </button>
          </td>
        </tr>
      </Modal>
    </>
  );
};
export default ModalBuying;
