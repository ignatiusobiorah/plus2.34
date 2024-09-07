import React from "react"
import { products } from "../products";
import {Product} from "./Product"

function Shop() {
  return (
    <div className="shop">
        <div className='title'>
            <h2> Our shop</h2>
        </div>
        <div className="products">
            {products.map((product) => <Product />)}
        </div>
    </div>
  )
}

export default Shop;