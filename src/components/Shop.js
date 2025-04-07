import React from "react"
import Product from "./Product";
import Header from "./Header";

function Shop({ cart, setCart}) {


  return (
    <div className="shop">
      <Header cart={cart} />
          <h2 > Products</h2>
          <Product cart={cart} setCart={setCart} />
    </div>
  )
}

export default Shop;