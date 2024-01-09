import { useDispatch, useSelector } from "react-redux";
import { checkBox, countDown, countUp, isCheck, removeCart } from "../../store/modules/cartSlice";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { useState } from "react";

 
const CartItem = ({item}) => {
    const {id,title,price,description,category,image,cnt} = item
    const {count , viewCheckBox} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const changeInput = e =>{
      const {name, checked} = e.target
      dispatch(isCheck(id))
    }
    return (
        <article>          
          <p>
            <label htmlFor={id}></label>
            <input type="checkbox" name={id} id={id} checked={viewCheckBox} onChange={changeInput} />
          </p>
          <img src={image}  alt={title} />
          
          <strong>{category}</strong>
          <div>
            <h3>
               {title}
            </h3>
            <p><i onClick={()=>dispatch(countDown(id))}><HiOutlineMinusSmall /></i></p>
            <p>{count}</p>
            <p><i onClick={()=>dispatch(countUp(id))}><GoPlus /></i></p>
            <span>{count*price}원</span>
          </div>
          <button onClick={()=>dispatch(removeCart(id))} > 삭제 </button>        
        </article>
    );
};

export default CartItem;