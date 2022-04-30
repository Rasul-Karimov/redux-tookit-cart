import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const ItemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== ItemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload)
            if (cartItem.amount > 1) {
                cartItem.amount = cartItem.amount - 1
            }
        }
    }
})

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions

export default cartSlice.reducer