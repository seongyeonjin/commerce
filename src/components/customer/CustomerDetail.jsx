import { useSelector } from "react-redux";
import { CustomerDetailWrap} from "./CustomerStyle";
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { edit, remove } from "../../store/modules/customerSlice";


const CustomerDetail = () => {
    const { customerID } = useParams()
    const { customerData } = useSelector(state => state.customer)
    const newItem = customerData.find(item => item.id === Number(customerID))
    const { id, title, name, content, date } = newItem
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onDel = () => {
        dispatch(remove(id))
        navigate(`/customer`)
    }
    const onEdit = () => {
        dispatch(edit(newItem))
        navigate(`/customer/customerEdit`)
    }
    return (
        <CustomerDetailWrap >
            <div className="inner">
            <h2> 문의 글 </h2>
            <div className="con">
            <h3> {id}번{title}</h3>
                           
                <p className="name"> {name} </p>                
                <p className="txt"> {content} </p>
                <p className="date"> {date} </p>
            </div>
            <p>
                <button onClick={()=>navigate(`/customer`)}>목록으로</button>
                <button onClick={onEdit}>수정하기</button>
                <button onClick={onDel}>삭제하기</button>
            </p> 
            </div>           
          </CustomerDetailWrap>
    );
};

export default CustomerDetail;