import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state) => state.cart;

export const selectCartTotal = createSelector(
    [selectCart],
    (cart) => {
        return cart.reduce(
            (total, item) => 
                total + item.price * item.qty,
            0
        );
    }
)