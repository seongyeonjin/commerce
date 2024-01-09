import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { NavWrap, TopMenu } from "./HeaderStyle";

const NavBar = () => {
    const {carts} = useSelector(state => state.cart)
    return (
        <>
        <NavWrap className="nav">
            <ul>             
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/product"}>Product</Link></li>
                <li><Link to={"/notice"}>Notice</Link></li>
                <li><Link to={"/customer"}>Customer</Link></li>
                <li><Link to="/cart">
                        Cart <span>{carts.length}</span>
                    </Link> </li>         
                            
            </ul>
        </NavWrap>

        <TopMenu className="top-menu">
             <li><Link to={"/join"}>회원가입</Link></li>   
             <li><Link to={"/login"}>로그인</Link></li>   
             <li><Link to={"/logout"}>로그아웃</Link></li>   
       </TopMenu>        
        </>
    );
};

export default NavBar;