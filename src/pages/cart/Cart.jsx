import CartList from '../../components/cart/CartList';
import { CartWrap } from './CartStyle';
 

const Cart = () => {  
   
    return (
        <CartWrap className="cart-box">
            <div className="inner">
                <CartList /> 
            </div>
        </CartWrap>
    );
};

export default Cart;