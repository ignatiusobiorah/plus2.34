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
              <p># {price}</p>
          </div>
        </div>
  )
}

export default ProductCard;