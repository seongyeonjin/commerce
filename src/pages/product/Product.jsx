import { useSelector } from 'react-redux';
import ProductItem from '../../components/product/ProductItem';
import ProductSearch from '../../components/product/ProductSearch';
import { ProductWrap } from './ProjectStyle';
import ProductList from '../../components/product/ProductList';
import Pagination from '../../components/pagination/Pagination';


const Product = () => {
    const {products} = useSelector(state => state.cart)
    return (
      <ProductWrap>
        <div className="inner">
          <h2>  best 상품 🌸 </h2>
          <ProductSearch />
          <ProductList />
          <Pagination />
        </div>
      </ProductWrap>
    );
};

export default Product;