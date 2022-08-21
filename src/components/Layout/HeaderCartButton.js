import { useContext } from 'react';

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'


import CardContext from '../../store/cart-context'

const HeaderCartButton = props => {
    const cartCtx = useContext(CardContext);
    const numOfCartItems =  cartCtx.items.reduce((currNumber,item) => {
        return currNumber+item.amount;
    },0);


    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
           {numOfCartItems}
        </span>
    </button>

};

export default HeaderCartButton;