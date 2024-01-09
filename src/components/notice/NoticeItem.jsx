import { Link } from "react-router-dom";

const NoticeItem = ({item}) => {
    const {id, title, date} = item
     
    return (
        <tr>
            <td>{id}</td>
            <td> <Link to={`/notice/${id}`}>{title}</Link> </td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeItem;