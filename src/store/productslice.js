import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialstate={
    products:products,
    selectedProduct:null
};

export const productSlice=createSlice({
    name:'products',
    initialState:initialstate,
    reducers:{
        setSelectedProduct:(state,action)=>{
        console.log(state);
        console.log(action);
        const productId=action.payload;
        state.selectedProduct=products.find((item)=>item.id===productId);
        }
    }
})