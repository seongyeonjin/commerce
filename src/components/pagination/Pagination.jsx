import { useDispatch, useSelector } from 'react-redux';
import { PaginationWrap } from './PaginationStyle';
import { useEffect } from 'react';
import { nextPage, prevPage, totalData, currentPage1 } from '../../store/modules/paginationSlice';

const Pagination = () => {
    const { noticeData } = useSelector((state) => state.notice);
    const { customerData } = useSelector((state) => state.customer);
    const { products } = useSelector((state)=> state.cart)
    const { currentPage, totalPage } = useSelector((state) => state.pagination);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalData());
    }, [customerData, noticeData, products]);
    //숫자는 맵으로 돌릴 수 없엄.
    //강제로 배열처리
    const arr = [...Array(totalPage)]

    return (
        <PaginationWrap>
            <div>
                <button onClick={()=>dispatch(prevPage())}>{`<<`}</button>
                  {
                    arr.map((_ , idx) => <button onClick={()=>dispatch(currentPage1(idx+1))} className={currentPage === (idx + 1) ? "on":""}> {idx + 1} </button> )
                  }
                <button onClick={()=>dispatch(nextPage())}>{`>>`}</button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;
