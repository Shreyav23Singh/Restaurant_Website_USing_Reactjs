import React ,{Fragment} from 'react';
import foodImage from "../../Images/Image.jpg";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButon';


const Header = (props) =>{
    return (
        <Fragment>
        <header className={classes.header}>
        <h1><span>SRK</span>'s <span>R</span>esto</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div  className={classes['main-image']}>
        <img src={foodImage} alt="img_meal" />
        </div>
        </Fragment>

    );

};
export default Header;
