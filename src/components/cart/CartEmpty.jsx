import { CartEmptyWrap } from "./CartStyle";
import { MdDoNotDisturb } from "react-icons/md";

const CartEmpty = () => {
    return (
        <CartEmptyWrap>
            <h4>장바구니에 추가된 제품이 없습니다.</h4>
            <p>
                <MdDoNotDisturb />
            </p>
        </CartEmptyWrap>
    );
};

export default CartEmpty;