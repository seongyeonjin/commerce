
import { useDispatch, useSelector } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { update } from "../../store/modules/customerSlice";


const CustomerEdit = () => {
    const {current} = useSelector(state => state.customer)
    const [user, setUser] = useState(current)
    const {name, title, content, date}=user
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [now, setNow] = useState(new Date())

    const changeInput = e =>{
        const {name, value} = e.target
        setUser({
            ...user, [name]:value
        })
    }
    const onSubmit = e =>{
        e.preventDefault()
        if(!title || !name || !content) return
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        dispatch(update(user))
        setUser({name:'', content:'', title:''})
        navigate(`/customer`)

    }
    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form  className="customer-add" onSubmit={onSubmit} >
                    <p>  <input type="text" onChange={changeInput} value={title} name="title" placeholder="제목"  /></p>
                    <p>  <input type="text" onChange={changeInput} value={name} name="name" placeholder="작성자"   /></p>
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder="문의하기" 
                        onChange={changeInput} value={content} name="content"
                        ></textarea></p>
                    <p>
                        <button onClick={()=>navigate(`/customer`)}>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={()=>navigate(-1)}>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;