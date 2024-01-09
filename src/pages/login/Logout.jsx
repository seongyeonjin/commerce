import { useSelector } from "react-redux";
import { LogoutWrap } from "./loginStyle";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { logout } from "../../store/modules/authSlice";

const Logout = () => {
    const {user, authed} = useSelector(state => state.auth)
    const {email, password} = user
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onGo = () => {
        dispatch(logout())
        navigate(`/login`)
    }
    return (
        <LogoutWrap>
             <div className="inner">
                {
                    authed ? <>
                    <h2>로그인 되었습니다  </h2>
                    <h3>이메일 :<span>{email}</span> </h3>
                    <h3>패스워드 :<span>{password}</span> </h3>
                    <p> <button onClick={onGo}>로그아웃</button> </p>
                    </> 
                    : 
                    <>
                    <h2>로그인 정보를 찾을 수 없습니다</h2>
                    </>
                }
                
            </div>
        </LogoutWrap>
    );
};

export default Logout;