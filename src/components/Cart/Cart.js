import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart, chooseAgain, choose1ForMe } = props;

    return (
        <div className='cart'>
            <h3>Selected Laptop</h3>

            {cart.length === 0 && (
                <div className='cart-warning'>
                    <p> Cart is empty </p>
                </div>
            )}
            {cart.map((item) => (
                < h6 > {item.name}</h6>
            ))
            }
            <div>
                <button className="choose" onClick={() => choose1ForMe()}>Select one for me</button></div>
            <div>
                <button className="chooseAnother" onClick={() => chooseAgain()}>Choose Another</button></div>
        </div >
    );
};

export default Cart;