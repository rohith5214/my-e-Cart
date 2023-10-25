import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./wishListSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
       wishlistReducer:wishListSlice,
       cartReducer:cartSlice
    }
})
export default store