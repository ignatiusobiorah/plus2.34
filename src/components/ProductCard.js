import React from 'react'

const ProductCard = ({item}) => {
    const {title, author, price, img} = item;

  return (
          <div className='product-card'>
          <div className='card'>
              <img src={img} alt='product-image'/>
          </div>
          <div className='details'>
              <p>{title}</p>
              <p>{author}</p>
              <p>Price - # {price}</p>
              <button>Add to cart</button>
          </div>
        </div>
  )
}

export default ProductCard;