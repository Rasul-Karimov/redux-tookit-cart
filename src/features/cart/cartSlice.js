import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}


export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
    return fetch(url)
        .then(resp => resp.json())
        .catch((err) => console.log(err))
})

const url = "https://course-api.com/react-useReducer-cart-project"

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
        },
        calculatorTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }

    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action)
            state.isLoading = false
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false
        },

    }
})

export const { clearCart, removeItem, increase, decrease, calculatorTotals } = cartSlice.actions

export default cartSlice.reducer