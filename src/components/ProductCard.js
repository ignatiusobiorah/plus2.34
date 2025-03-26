import React from 'react'

const ProductCard = ({item, handleClick, isDisabled}) => {
    const {title, price, img} = item;
   

  return (
        <div className='product-card'>
          <div className='card'>
              <img src={img} alt='product-image'/>
          </div>
          <div className='details'>
              <p>{title}</p>
              <p># {price}</p>
          </div>
          <div className='cart-btn'>
            <button onClick={()=>handleClick(item)} className='btn btn-light' disabled={isDisabled}>
              {isDisabled ? 'Added to cart' : 'Add to cart'}
            </button>
          </div>
        </div>
  )
}

export default ProductCard;