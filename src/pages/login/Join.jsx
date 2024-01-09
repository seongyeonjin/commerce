import { useSelector } from "react-redux";
import { JoinWrap  } from "./loginStyle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";
import { signup } from "../../store/modules/authSlice";

const Join = () => {
    const [user, setUser] = useState({
        username:'', tel:'', email:'', password: ''
    })
    const {username, tel, email, password} = user
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const nameRef = useRef(null)
    const onInput = (e) => {
        const {name, value} = e.target
        setUser({
            ...user, [name]:value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(!username || !tel) return
        dispatch(signup(user))
        setUser({username:'', tel:'', email:'', password:''}
        )
        nameRef.current.focus()
    }
    return (
        <>         
            <JoinWrap>
                <div className="inner">
                <h2> 회원가입 </h2>
                <form onSubmit={onSubmit} >
                    <p>
                        <label> 이름 </label>  
                        <input type="text"  placeholder="홍길동" name="username" value={username} onChange={onInput} />
                    </p>                
                    <p>
                        <label> 전화번호 </label>  
                        <input type="tel" placeholder="010-0000-0000" name="tel" value={tel} onChange={onInput}/>
                    </p>                
                    <p>
                        <label>이메일 </label>  
                        <input type="email" placeholder="abc@naver.com" name="email" value={email} onChange={onInput}/>
                    </p>                
                    <p>
                        <label>비밀번호 </label>  
                        <input type="password" placeholder="a1234" name="password" value={password} onChange={onInput}/>
                    </p>
                    <p><button type="submit">회원가입</button>
                       <button onClick={()=>navigate(`/`)}>취소</button></p>
                </form>
                </div>

            </JoinWrap>
        </>
    );
};

export default Join;