import React, { useCallback } from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import {Trash2} from "lucide-react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  //Calculate the total price of the cart items
  const handlePrice = useCallback(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.amount;
    });
    setPrice(total);
  }, [cart]); 

  useEffect (() => {
    handlePrice();
  }, [cart, handlePrice]);

  // Remove item from cart
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    // console.log(newCart);
  };

  const updateAmount = (item, operator) => {
    // console.log(item, operator);
    const ind = cart.findIndex((data) => data.id === item.id);
    
    if (ind !== -1) {
      //create a new array to avoid direct state mutation
      const tempArr = [...cart];
      tempArr[ind].amount += operator;

      //Ensure amount doesn't go below 1
      if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
      setCart(tempArr);

    // let ind = -1;
    // cart.forEach((data, index) => {
    //   if (data.id === index.id)
    //     ind = index;
    // });
    // const tempArr = cart;
    // tempArr[ind].amount += operator;

    // if (tempArr[ind].amount === 0)
    //   tempArr[ind].amount = 1;
    // setCart([...tempArr])
    }
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
                    <button className="btn btn-light" onClick={() => updateAmount(item, +1)}> + </button>
                    <button className="amount btn btn-outline-light"> {item.amount}</button>
                    <button className="btn btn-light" onClick={() => updateAmount(item, -1)}> - </button>
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
