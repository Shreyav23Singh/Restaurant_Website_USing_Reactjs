import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

import CartContext from '../Store/cart-context';

const Cart = (props) =>{
    const cartCtx = useContext(CartContext);

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems =cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {};

    const cartItemAddHandler =item => {};

    const cartItems =<ul className={classes['cart-items']}>{
        cartCtx.items.map((item) =>(
        //     <cartItems >
        //    key={item.id} 
        //     name={item.name}
        //     amount={item.amount} 
        //     price ={item.price}
        //     onRemove={cartItemRemoveHandler.bind(null , item.id)}
        //     onAdd={cartItemAddHandler.bind(null , item)}
        //    </cartItems>
        <li key={[item.id]}>
          <div>
            <strong>{item.name}</strong>
            <span>{item.amount}</span>
            <span>₹{item.price}</span>
          </div>
          <button onClick={cartItemRemoveHandler.bind(null, item.id)}>Remove</button>
        </li>
        ))}</ul>

        return (
            <Modal onClose={props.onClose}>
            {cartItems}
            
            <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
            <button  className={classes['button--alt']} onClick={props.onClose}>Close</button>
            { hasItems && <button className={classes.button}>Order</button>}
            </div>
            </Modal>

        );



};
export default Cart;
