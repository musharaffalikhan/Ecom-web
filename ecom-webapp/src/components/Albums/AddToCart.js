
import classes from './AddToCart.module.css';

const AddToCart = props =>{
    return <form className={classes.form}>
        <button className={classes['shop-item-button']}>ADD TO CART</button>
    </form>
}
export default AddToCart;