import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart, chooseAnother, choose } = props;

    return (
        <div className='cart'>
            <h2>Selected Laptop</h2>

            {cart.length === 0 && (
                <div className='cart-warning'>
                    <p> Cart is empty </p>
                </div>
            )}
            {cart.map((item) => (
                <p> {item.name}</p>
            ))
            }
            <div>
                <button className="choose" onClick={() => choose()}>Select one for me</button></div>
            <div>
                <button className="chooseAnother" onClick={() => chooseAnother()}>Choose Again</button></div>
        </div >
    );
};

export default Cart;