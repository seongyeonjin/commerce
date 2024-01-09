import { configureStore } from '@reduxjs/toolkit'
import notice from './modules/noticeSlice'
import cart from './modules/cartSlice'
import customer from './modules/customerSlice'
import auth from './modules/authSlice'
import pagination from './modules/paginationSlice'

export const store = configureStore({
  reducer: {
    notice,
    cart,
    customer,
    auth,
    pagination,

  },
})