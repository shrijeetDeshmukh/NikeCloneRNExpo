import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productslice";
import { cartSlice } from "./cartSlice";
export const Store=configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer
    }
})