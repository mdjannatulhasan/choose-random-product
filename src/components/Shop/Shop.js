import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const productExist = cart.find(obj => obj.id === product.id);
        console.log(cart.length)
        if(cart.length < 4){
            if(!productExist){
                const newCart = [...cart, product];
                setCart(newCart);
            }
        }
    }
    const chooseAnother = () => {
        const emptyCart = [];
        setCart(emptyCart);
    }
    const choose = () => {
        const oneArray = cart[Math.floor(Math.random() * cart.length)]

        const oneCart = [oneArray];
        setCart(oneCart);


        alert('It is best.use it .Click ok');
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart

                    cart={cart}
                    chooseAnother={chooseAnother}
                    choose={choose}>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;