import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData: [],
    currentPage: 1,
    totalPage: 1,
    postsPerPage:10,
};

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        prevPage: (state, action) => {
            if(state.currentPage === 1){
                state.currentPage = 1
            }else{
                state.currentPage--
            }
        },
        nextPage: (state, action) => {
            if(state.currentPage === state.totalPage) {
                state.currentPage = state.totalPage
            }else{
                state.currentPage++
            }
        },
        currentPage1: (state, action) => {
            state.currentPage = action.payload
            //페이지 번호 클릭 시 나오는 페이지
        },
        addData: (state, action) => {
            state.pageData = action.payload
            //noticeData or cartData etc... 데이터마다 갯수가 다르므로( 페이지 데이터에 들어오는 )addData를 써야함.
        },
        totalData: (state, action) => {
            state.currentPage = 1
            state.totalPage = Math.ceil(state.pageData.length / state.postsPerPage)
            //총 목록개수에서 펄페이지 나눈것. math.ceil은 소수점 제거.
        },
        perPageData: (state, action) => {},
    },
});

export const { prevPage, nextPage, currentPage1,addData, totalData,perPageData } = paginationSlice.actions;

export default paginationSlice.reducer;
