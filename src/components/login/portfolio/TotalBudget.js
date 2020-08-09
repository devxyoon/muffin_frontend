import React, {useState} from "react";
import Modal from "react-modal";

const TotalBudget = () => {

    return <>
        <table className="stock_table">
            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <tr>
                                    <td>
                                        <span className="text-base font-bold">내 자산 총액</span> <br/>
                                        <span className="text-2xl font-bold" style={{"margin" : "auto"}}>10,000,000 원</span>
                                    </td>
                                    <td>
                                        <span className="text-base">평가 수익률</span>
                                        <span className="text-lg font-bold">23.08%</span> <br/>
                                        <span className="text-base" style={{"margin-right":"12px"}}>평가 손익</span>
                                        <span className="text-lg font-bold">671,340원</span>
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

export default TotalBudget;