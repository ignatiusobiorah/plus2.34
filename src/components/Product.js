import React from "react"
import ProductDetails from "./ProductDetails";
import ProductCard from "./ProductCard";

export const Product = () => {

    return (
        <div className="product-card-container">
            {ProductDetails.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Product;