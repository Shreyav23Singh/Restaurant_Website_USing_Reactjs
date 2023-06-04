import { useContext } from 'react';
import classes from './DishesItems.module.css'
import MealItemForm from './DishItemsForm';
import CartContext from '../../Store/cart-context';
const DishItem = (props) => {
    const cartCtx =useContext(CartContext);
    const price = `₹${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id :props.id ,
            name :props.name,
            amount:amount,
            price:props.price
        });

    };

    return (
        <li className={classes.meal}>
        <div >
        <h3>{props.name}</h3>
        <div  className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
        </li>
    )

}
export default DishItem;
