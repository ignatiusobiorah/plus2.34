import React from "react"
import ProductDetails from "./ProductDetails";
import ProductCard from "./ProductCard";

export const Product = ({cart, setCart}) => {

    const handleClick = (item) => {
        // console.log(item);
        let isPresent = false;
        cart.forEach((product) => {
            if(product.id === item.id){
                isPresent = true;
            }
        })
        if (isPresent)
            return;

        setCart([...cart, item])
        
    }

    return (
        <div className="product-card-container">
            {ProductDetails.map((item) => (
                <ProductCard key={item.id} item={item} handleClick={handleClick} />
            ))}
        </div>
    )
}

export default Product;