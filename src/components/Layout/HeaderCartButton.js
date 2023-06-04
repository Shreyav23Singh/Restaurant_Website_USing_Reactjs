import React, { useContext} from "react";
import CartIcon from '../Cart/cartIcon';
import CartContext from "../Store/cart-context";

import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {

  const cartCtx =useContext(CartContext);

  const numberOfCartItems =cartCtx.items.reduce((curNumber , item ) =>{
    return curNumber  + item.amount;
  } , 0);
  return (
        <button className='button' onClick = {props.onClick}>
          <span className='icon' >
           <CartIcon/>
          </span>
          <span>Your Cart</span>
          <span className='badge'>{numberOfCartItems}</span>
        </button >
     
  );
};
export default HeaderCartButton;
