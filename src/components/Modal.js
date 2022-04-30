import React from 'react'
import { useDispatch } from 'react-redux';
import { modelClose } from '../features/model/modelSlice';
import { clearCart } from '../features/cart/cartSlice';
const Modal = () => {
    const dispatch = useDispatch()
    function handleClickConfirm() {
        dispatch(modelClose())
        dispatch(clearCart())
    }
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from your shopping cart?</h4>
                <div className='btn-container'>
                    <button onClick={handleClickConfirm} type='button' className='btn confirm-btn'>
                        confirm
                    </button>
                    <button onClick={() => dispatch(modelClose())} type='button' className='btn clear-btn'>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Modal