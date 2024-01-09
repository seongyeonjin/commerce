import { createSlice } from '@reduxjs/toolkit'
import noticedata from '../../assets/api/noticedata'
const initialState = {
    noticeData: noticedata
}

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    increment: (state,action) => {
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment } = noticeSlice.actions

export default noticeSlice.reducer