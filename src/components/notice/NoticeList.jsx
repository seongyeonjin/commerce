import { useDispatch, useSelector } from 'react-redux';
import NoticeItem from './NoticeItem';
import { NoticeListWrap } from './NoticeStyle';
import { useEffect } from 'react';
import { addData } from '../../store/modules/paginationSlice';

 
const NoticeList = () => {
    const { noticeData } = useSelector(state=>state.notice)
    const { currentPage, postsPerPage } = useSelector(state => state.pagination)
    const dispatch = useDispatch()

    const lastPost = currentPage * postsPerPage //마지막 번호를 알려주는 변수
    const firstPost = lastPost - postsPerPage //시작 번호를 알려주는 변수
    const currentPosts = noticeData.slice(firstPost, lastPost)

    useEffect(()=>{
        dispatch(addData(noticeData))
    },[])
    return (
        <NoticeListWrap>
        <table className="noticeTable">
            <caption>게시판</caption>
            <colgroup>
                <col className="num" />
                <col className="title" />               
                <col className="date" />               
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>내용</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentPosts.map(item=><NoticeItem key={item.id} item={item} />)
                }
           </tbody>
        </table>
        </NoticeListWrap>
    );
};

export default NoticeList;