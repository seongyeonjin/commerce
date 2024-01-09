import { Link } from "react-router-dom";

const CustomerItem = ({item}) => {
    const {id, content, title, date, name} = item
   
    return (
        <tr>
            <td>{id}</td>
            <td><Link to={`/customer/${id}`}> {title} </Link> </td>
            <td>{name}</td>
            <td> {date} </td>
        </tr>
    );
};

export default CustomerItem;