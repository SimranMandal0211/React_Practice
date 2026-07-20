import {createSlice} from "@reduxjs/toolkit";
import { act } from "react";

const savedCart = localStorage.getItem("cart");

const initialState = savedCart 
    ? JSON.parse(savedCart)
    : [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart : (state, action) => {
            const product = action.payload;

            const existingItem = state.find(
                (item) => item.id === product.id
            );

            if(existingItem){
                existingItem.qty += 1;
            }else{
                state.push({
                    ...product,
                    qty: 1,
                });
            }
        },
        RemoveFromCart: (state, action) => {
            return state.filter(
                (item) => item.id !== action.payload
            );
        },
        IncreaseQty: (state, action) => {
            const item = state.find(
                (item) => item.id === action.payload
            );

            if(item){
                item.qty += 1;
            }
        },
        DecrementQty: (state, action) => {
            const item = state.find(
                (item) => item.id === action.payload
            );

            if(item && item.qty > 1){
                item.qty -= 1;
            }
        },
    },
});

export const {
    AddToCart,
    RemoveFromCart,
    IncreaseQty,
    DecrementQty
} = cartSlice.actions;

export default cartSlice.reducer;