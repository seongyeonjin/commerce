import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../../store/modules/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
    const {id,title,price,description,category,image,rating: { rate, count },} = item;
    const {carts} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onAdd = ()=>{
        dispatch(addCart(item))
    }
    return (
        <article>
            <div>
                <img src={image} alt="" />
            </div>
            <h3> {category} </h3>
            <h4> {title} </h4>
            <p>
                {
                    carts.find( x => x.id === id ) ?
                    <button onClick={()=>dispatch(removeCart(id))} className="off"> 주문취소 </button>
                    :
                    <button onClick={onAdd}> 장바구니 </button>
                }
                <span> {price} 원</span>
            </p>
        </article>
    );
};

export default ProductItem;
