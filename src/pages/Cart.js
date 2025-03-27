import React from "react";
import { useState } from "react";

const Cart = ({cart, setCart}) => { 
  const [price, setPrice] = useState(0);
  console.log(price)
  return (
    <div className="cart-container">
      {
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-details">
              <img src={item.img} alt="product-image"/>
              <p>{item.title}</p>
            </div>

            <div> 
              <button> + </button>
              <button> - </button>
            </div>
              
            <div className="cart-item-price">
              <span># {item.price}</span>
              <button>remove</button>
            </div>
          </div>
        ))
      }
      <div>
        <span>Total</span>
        <span># {price}</span>
      </div>
      
    </div>
  )
}

export default Cart;