import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null, //존재하지 않으면
    authed: false, //이부분은 펄스
    dataList: []
};
// user1: {email: 'abc@naver.com', password:'a1234'} 이 정보와 일치해야 authed가 트루로 변경.
let no = 1
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const {email, password} = action.payload
            const newItem = state.dataList.find(item => item.email === email)
            if(newItem.password === password) {
                state.user = newItem;
                state.authed = true;
            } 
        },
        logout: (state, action) => {
            state.user = null;
            state.authed = false;
        },
        signup:(state,action) => {
            const {email, tel, username, password} = action.payload

            state.dataList = [...state.dataList, {id:no++, ...action.payload}]
        }
    },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
