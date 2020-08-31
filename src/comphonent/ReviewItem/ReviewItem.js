import React from 'react';

const ReviewItem = (props) => {
    const { name, quntity, img, key, price } = props.product;
    const productStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        padding: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={productStyle}>
            <h3>{name}</h3>
            <p>{quntity}</p>
            <br />
            <img src={img} alt="" />
            <br />
            <p><small>{price}</small></p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className='main-button'>remove</button>
        </div>
    );
};

export default ReviewItem;