import React from 'react'
import { Link } from 'react-router-dom';
import setCurrentProduct from '../actions/setCurrentProduct';
import { useDispatch } from 'react-redux';
import {addToCart} from '../actions/cartAction.js'
import {addToWishlist} from '../actions/wishListActions.js'






function IconList({product}) {
 let  dispatch = useDispatch()

let handleCurrentProduct = () => {
  dispatch(setCurrentProduct(product))

}
let handleShoppingBagClick = () => {
  dispatch(addToCart(product))
  alert('Product added to cart')
}
let handleHeartClick = () => {
  dispatch(addToWishlist(product))
  alert('Product added to wishlist')
}
  


  return (
    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
      
      
      <Link onClick={ handleCurrentProduct} to={{pathname:`/details/`}}> 
        <li className="icon">
          <span className="fas fa-expand-arrows-alt"></span>
        </li>
      </Link>

      <li className="icon mx-3" onClick = {handleHeartClick}>
         <span className="far fa-heart "></span>
      </li>
       

       
        <li className="icon" onClick={handleShoppingBagClick}>
          <span className="fas fa-shopping-bag"></span>
        </li>
       
</ul>
  )
}

export default IconList;