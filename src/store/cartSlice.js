import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartItem = state.items.find((item) => item.product.id === newProduct.id);
            console.log("Product ---", cartItem);
            if (!cartItem) {
                state.items.push({ product: newProduct, quantity: 1 })
            } else {
                console.log("Product already");
                cartItem.quantity += 1;
            }
        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            console.log("Product ID", productId);
            const cartItem = state.items.find((item) => item.product.id === productId);
            console.log("cartitems---", cartItem);
            if (cartItem) {
                cartItem.quantity += amount;
            }
            if (cartItem.quantity <= 0) {
                state.items = state.items.filter(item => item != cartItem)
            }

        }
    }
})


export const selectedCartItems=state=>state.cart.items.length;

export const sumSubTotal=(state)=>state.cart.items.reduce((sum,cartItem)=>sum+cartItem.product.price * cartItem.quantity,0);

const cartSelector=(state)=>state.cart;

export const selectDeliveryPrice=createSelector(cartSelector,sumSubTotal,(cart,sumtotal)=> sumtotal>cart.freeDeliveryFrom ?0 :cart.deliveryFee);

export const orderTotal=createSelector(sumSubTotal,selectDeliveryPrice,(total,delivery)=>total+delivery);