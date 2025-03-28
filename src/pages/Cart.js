import React from "react";
import Header from "../components/Header";
import { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  console.log(price);
  return (
    <div className="cart-container">
      <Header cart={cart} />
      {cart.length === 0 ? (
        <div className="cart-empty">
          <h1>Your cart is empty</h1>
        </div>
      ) : (
        <div className="cart-items">
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-details">
                  <img src={item.img} alt="product-image" />
                  <p className="item-title">{item.title}</p>
                </div>

                <div className="cart-item-quantity">
                  <button className="btn btn-light"> + </button>
                  <button className="btn btn-light"> - </button>
                </div>

                <div className="cart-item-price">
                  <span># {item.price}</span>
                  <button className="btn btn-light">remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="summary">
            <span>Total</span>
            <span># {price}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
