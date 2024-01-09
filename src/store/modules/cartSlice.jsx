import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/cartdata'
const initialState = {
    carts: [],
    carttotal: 0,
    products:productData,
    count:1,
    viewCheckBox: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
          state.carts.push(action.payload)
        },
        removeCart: (state, action) => {
          state.carts = state.carts.filter(item=>item.id !==action.payload)
        },
        totalCart: (state, action) => {
          state.carttotal = state.carts.reduce((acc,cur)=>acc+cur.price,0)
        },
        sortCart: (state, action) => {
          // if(action.payload === 'title') {
          //   state.products.sort((a,b) => a.title > b.title ? 1 : -1)
          // } 
          // if(action.payload === 'category') {
          //   state.products.sort((a,b) => a.category > b.category ? 1 : -1)
          // } 
          // if(action.payload === 'price') {
          //   state.products.sort((a,b) => a.price > b.price ? 1 : -1)
          // } 
          if(action.payload !== ''){
            state.products.sort((a,b) => a[action.payload] > b[action.payload] ? 1 : -1)
          }
          if(action.payload === 'reset'){
            state.products = productData
          }
        },
        seartchCart: (state, action) => {
          //꼭 원본에서 필터를 걸어야함.
          state.products = productData.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
        },
        resetCart: (state) => {
          state.products = productData
        },
        countUp: (state,action) => {
          if(state.count >= 1){
            state.count += 1
          }else {
            return state
          }
        },
        countDown: (state,action) => {
          if(state.count > 1){
            state.count -= 1
          }else {
            return
          }
        },
        isCheck: (state, action) => {
          const newItem = state.carts.find(item => item.id === action.payload)
          console.log(action.payload)
          if(newItem) {
            state.viewCheckBox = !state.viewCheckBox
          }else {
            return
          }
        },
    },
});

export const { addCart,removeCart,totalCart, countUp,countDown, sortCart, seartchCart, resetCart,isCheck, checkBox } = cartSlice.actions;

export default cartSlice.reducer;
