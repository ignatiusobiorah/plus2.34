import React from "react"
import ProductDetails from "./ProductDetails";
import ProductCard from "./ProductCard";
import { useState } from "react";

export const Product = ({cart, setCart}) => {
    const [disabled, setDisabled] = useState([]); //state to hold items already added to the cart

    const handleClick = (item) => {
        // console.log(item);
        let isPresent = false;
        cart.forEach((product) => {
            if(product.id === item.id){
                isPresent = true;
            }
        })
        if (isPresent) {
            return;
        }
        setCart([...cart, item]);
        setDisabled([...disabled, item.id]);
        
    }

    // console.log(disabled);

    return (
        <div className="product-card-container">
            {ProductDetails.map((item) => (
                <ProductCard 
                key={item.id} 
                item={item} 
                handleClick={handleClick} 
                isDisabled={disabled.includes(item.id)}/>
            ))} 
        </div>
    )
}

export default Product;