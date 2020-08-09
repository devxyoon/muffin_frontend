import React, {useState} from "react";
import Modal from "react-modal";

const HoldingShares = () => {
    const [count, setCount] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);


    const openModal = e => {
        e.preventDefault();
        setIsOpen(true);
    }
    const closeModal = e => {
        e.preventDefault();
        setIsOpen(false);
    }
    const decrease = e => {
        e.preventDefault();
        setCount(count-1)
    }
    const increase = e => {
        e.preventDefault();
        setCount(count+1)
    }

    const modalStyle = {
        content : {
            width : '300px',
            height : '400px'
        }
    }

    return <>
        <Modal isOpen={modalIsOpen} style={modalStyle}>
            <span className="text-base" style={{"margin-right" : "8px"}}>현재가</span>
            <span className="text-xl ">123,320원</span> <br/>

            <span className="text-base" style={{"margin-right" : "8px"}}>매입가</span>
            <span className="text-xl ">123,320원</span>

            <h1>{count} 주</h1>
            <div>
                <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised"
                        onClick={decrease}> -1 </button>
                <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised"
                        onClick={increase}> +1 </button>
            </div>
            <tr>
                <td>
                    <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                            onClick={closeModal}>취소</button>
                </td>
                <td>
                    <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded"
                            onClick={closeModal}>매수</button>
                </td>
            </tr>
        </Modal>
        <table>
            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-xl font-bold">삼성전자</span>
                                        <span className="text-sm" style={{"margin-left" : "8px"}}>003248</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                                                onClick={openModal}>매수</button>
                                        <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded"
                                                onClick={openModal}>매도</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "42px"}}>잔고</span>
                                        <span className="text-xl">32주</span>
                                    </td>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "20px"}}>손익</span>
                                        <span className="text-xl ">2389238 원</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "8px"}}>평가 금액</span>
                                        <span className="text-xl ">123,320원</span>
                                    </td>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "8px"}}>수익률</span>
                                        <span className="text-xl ">32.59%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "28px"}}>매입가</span>
                                        <span className="text-xl ">123,320원</span>
                                    </td>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "8px"}}>현재가</span>
                                        <span className="text-xl ">123,320원</span>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </>
}

export default HoldingShares;