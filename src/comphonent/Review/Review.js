import React, { useEffect } from 'react';
import { useState } from 'react';
import {  getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setcart] =useState([]);
    const [orderPlaced, setOrderPlaced]=useState(false);

    const handeBuyProduct=()=>{
        setcart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const removeProduct = (productkey)=>{
        const newCart = cart.filter(pd=>pd.key !==productkey)
        setcart(newCart)
        removeFromDatabaseCart(productkey)
    }

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map(key=>{
            const product = fakeData.find(pd=>pd.key===key);
            product.quntity =saveCart[key]
            return product;
        });
        setcart(cartProduct);
    }, [])
    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt="" srcset=""/>
    }
    return (
        <div className='shop-container'>
          <div className='product-container'>
          {
                cart.map(pd=>
                 <ReviewItem
                product={pd}
                removeProduct={removeProduct}
                key={pd.key}
                ></ReviewItem>)
            }
            {thankYou}
          </div>
          <div className='cart-container'>
            <Cart cart={cart}> 
                <button onClick={handeBuyProduct} className='main-button'>
                    order review
                </button>
            </Cart>
          </div>
        </div>
    );
};

export default Review;