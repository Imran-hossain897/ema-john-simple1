import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total =0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price* product.quntity;
    }
    let shipping =0;
    if(total>35){
        shipping= 0;
    }
    else if(total>15){
        shipping= 4.49
    }
    else if(total>0){
        shipping =12.99
    }
    const tax = (total/10).toFixed(2);
    const grandTotal =(total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h4>order summary</h4>
             <p>items order {cart.length}</p>
            <p>product price{total}</p>
             <p><small>shipping cost:{shipping}</small></p>
             <p><small>tax+vat:{tax}</small></p>
             <p>total price{grandTotal}</p>
             {
                 props.children
             }
            
        </div>
    );
};

export default Cart;