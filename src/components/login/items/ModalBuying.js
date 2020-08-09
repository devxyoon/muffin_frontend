import React, {useState} from "react";
import Modal from "react-modal";

const ModalBuying = () => {
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
    </>
}

export default ModalBuying;