import React from "react"
import Product from "./Product";
import ProductCard from "./ProductCard";

function Shop() {
  return (
    <div className="shop">
        <div className='title'>
            <h2> Our shop</h2>
        </div>
        <div className="products">
          <Product/>
        </div>
    </div>
  )
}

export default Shop;