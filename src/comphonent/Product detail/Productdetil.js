import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdetil = () => {
    const {productKey} =useParams();
    const product = fakeData.find(pd=>pd.key===productKey)
    return (
        <div>
            <h4>ordering product</h4>
            <Product productAddToCart={false} product={product}></Product>
        </div>
    );
};

export default Productdetil;