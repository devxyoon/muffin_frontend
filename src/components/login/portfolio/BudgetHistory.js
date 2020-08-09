import React, {useState} from "react";

// <td>{item.transactionDate}</td>
// <td>{item.stockName}</td>
// <td>{item.transactionType}</td>
// <td>{item.profitLoss}</td>
// <td>{item.totalAsset}</td>


const BudgetHistory = () => {
    const [stockName, setStockName] = useState("씨젠");
    const [transactionDate, setTransactionDate] = useState(
        "2020.08.21");
    const [transactionType, setTransactionType] = useState("매도");
    const [profitLoss, setProfitLoss] = useState("44,290 원")
    const [totalAsset, setTotalAsset] = useState("83,589,400 원")
    const [arr, setArr] = useState([
        {
            stockName : stockName,
            transactionDate: transactionDate,
            transactionType: transactionType,
            profitLoss: profitLoss,
            totalAsset: totalAsset
        },
        {
            stockName : stockName,
            transactionDate: transactionDate,
            transactionType: transactionType,
            profitLoss: profitLoss,
            totalAsset: totalAsset
        },
        {
            stockName : stockName,
            transactionDate: transactionDate,
            transactionType: transactionType,
            profitLoss: profitLoss,
            totalAsset: totalAsset
        },
        {
            stockName : stockName,
            transactionDate: transactionDate,
            transactionType: transactionType,
            profitLoss: profitLoss,
            totalAsset: totalAsset
        }

    ])

    const linktoDetail = e => {
        e.preventDefault();
    }

    return <>
        <table className="table">
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
            {arr.map((item)=>(
                <tr onClick={linktoDetail}>
                    <td>{item.transactionDate}</td>
                    <td>{item.stockName}</td>
                    <td>{item.transactionType}</td>
                    <td>{item.profitLoss}</td>
                    <td>{item.totalAsset}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}

export default BudgetHistory;