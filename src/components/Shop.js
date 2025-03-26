import React from "react"
import Product from "./Product";

function Shop({ cart, setCart}) {


  return (
    <div className="shop">
          <h2 > Our shop</h2>
          <Product cart={cart} setCart={setCart} />
    </div>
  )
}

export default Shop;