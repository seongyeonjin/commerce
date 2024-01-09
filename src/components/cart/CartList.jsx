import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartListWrap } from "./CartStyle";
import { useNavigate } from "react-router-dom";
import { totalCart } from "../../store/modules/cartSlice";
import { useEffect, useState } from "react";
import CartEmpty from "./CartEmpty";

const CartList = () => {
    const {carts,carttotal} = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(totalCart())
    },[carts])
    return (
        <CartListWrap className="cart-wrap">
            <h2>장바구니</h2>
            <div className="cart-list">
                {
                    carts.length > 0 ?
                    carts.map(item=><CartItem key={item.id} item={item} />)
                    :
                    <CartEmpty />
                }
            </div>
            <div className="cart-bottom">
                <p><strong>총개수</strong>
                <span> per : {carts.length} 개</span> 
                </p>                
                <p><strong>총금액</strong>
                <span> total : {carttotal} 원</span> 
                </p>
            </div>
            <button onClick={()=>navigate(`/product`)}>쇼핑하러가기</button>
            <button>선택 상품 삭제</button>
            <button>장바구니 비우기</button>
        </CartListWrap>
    );
};

export default CartList;