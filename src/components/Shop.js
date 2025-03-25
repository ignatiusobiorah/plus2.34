import React from "react"
import Product from "./Product";

function Shop({handleClick, cart, setCart}) {


  return (
    <div className="shop">
          <h2 > Our shop</h2>
          <Product handleClick={handleClick} cart={cart} setCart={setCart} />
    </div>
  )
}

export default Shop;