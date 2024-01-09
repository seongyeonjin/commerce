import React, { useEffect } from 'react';
import { ProductListWrap } from './ProductStyle';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { current } from '@reduxjs/toolkit';
import { addData } from '../../store/modules/paginationSlice';

const ProductList = () => {
    const {products} = useSelector(state => state.cart)
    const {currentPage, postsPerPage} = useSelector(state => state.pagination)
    const dispatch = useDispatch()

    const lastPost = currentPage * postsPerPage
    const firstPost = lastPost - postsPerPage
    const currentPosts = products.slice(firstPost, lastPost)

    useEffect(()=>{
      dispatch(addData(products))
    },[])
    return (
        <ProductListWrap>
            <div className="cart-box">
          {
            currentPosts.map(item=><ProductItem key={item.id} item={item} />)
          }     
            </div>
        </ProductListWrap>
    );
};

export default ProductList;