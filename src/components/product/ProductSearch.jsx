import React, { useEffect, useRef, useState } from 'react';
import { ProductSearchWrap } from './ProductStyle';
import { useDispatch } from 'react-redux';
import { resetCart, seartchCart, sortCart } from '../../store/modules/cartSlice';

const ProductSearch = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const textRef = useRef()
    //성격이 달라서 따로 씀
    const onSort = e => {
        e.preventDefault()
        const {value} = e.target
        dispatch(sortCart(value))
    }
    const chageInput = e =>{
        const {value} = e.target
        setText(value)
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch(seartchCart(text))
        // setText('')
        textRef.current.focus()
        //검색하고 갱신이 안되서 무조건 useEffect가 필요함
    }
    useEffect(()=>{
        dispatch(seartchCart(''))
    },[])
    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <select onChange={onSort}>
                        <option value="reset">선택</option>
                        <option value="category">카테고리순</option>
                        <option value="title">제품명</option>
                        <option value="price">가격순</option>
                    </select>
                    <span onClick={()=>dispatch(resetCart())}>초기화</span>
                </p>
                <p> 
                    <input type="text" name="" value={text} onChange={chageInput} ref={textRef} />
                    <button type='submit'>검색</button>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;