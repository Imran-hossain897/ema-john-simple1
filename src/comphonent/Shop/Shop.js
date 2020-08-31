import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setproducts] = useState(first10)
    const [cart, setcart]= useState([]);
        useEffect(()=>{
            const savedCart = getDatabaseCart();
          const  productKeys= Object.keys(savedCart);
            const previousCart= productKeys.map(existingKey=>{
              const product= fakeData.find(pd=>pd.key===existingKey)
                product.quntity=savedCart[existingKey];
                return product;
            })
            setcart(previousCart);
        }, [])
    const handlerAddProduct = (product)=>{
        const toBeAddedKey= product.key;
        const sameProduct = cart.find(pd=>pd.key===toBeAddedKey);
        let count =1;
        let newCart;
        if(sameProduct){
           count= sameProduct.quntity +1;
           sameProduct.quntity =count;
           const others= cart.filter(pd=>pd.key !==toBeAddedKey);
           newCart=[...others, sameProduct];
        }
        else{
            product.quntity=1;
            newCart=[...cart, product]
        }
        setcart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                        key={pd.key}
                    productAddToCart={true}
                        handlerAddProduct ={handlerAddProduct}
                        product={pd}
                        ></Product>)
                }
            </div>
            <div className="card-contaioner">
                <Cart cart={cart}>
                <Link to="/review">
              <button className="main-button">Review</button>
             </Link>
                </Cart>
            </div>
           
        </div>
    );
};

export default Shop;