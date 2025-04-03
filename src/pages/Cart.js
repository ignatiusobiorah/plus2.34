import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import {Trash2} from "lucide-react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  //Calculate the total price of the cart items
  const handlePrice = () => {
    let total =0;
    cart.map((item) => (
      total += item.price * item.amount
    ))
    setPrice(total);
  }

  useEffect (() => {
    handlePrice();
  })

  // Remove item from cart
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    // console.log(newCart);
  };



  const updateAmount = (item, operator) => {
    console.log(item, operator);
  }
    
  

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
                  <div>
                    <p className="item-title">{item.title}</p>
                    <span># {item.price}</span>
                  </div>
                  
                </div>

                <div className="cart-item-quantity">

                  <div className="quantity">
                    <button className="btn btn-light" onClick={() => updateAmount(item, "+")}> + </button>
                    <button className="amount btn btn-outline-light"> {item.amount}</button>
                    <button className="btn btn-light" onClick={() => updateAmount(item, "-")}> - </button>
                  </div>
                    <button onClick={() => removeItem(item.id)} className="btn btn-light"><Trash2 /> Remove</button>
                </div>

              </div>
            ))}
          </div>

          <div className="summary">
            <button className="btn btn-light btn-lg">checkout (# {price})</button>
            {/* <span>Total</span>
            <span># {price}</span> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
