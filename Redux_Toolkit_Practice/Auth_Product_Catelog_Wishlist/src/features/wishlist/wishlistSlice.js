import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const alreadyExists = state.items.some(
                (item) => item.id === action.payload.id
            );

            if(!alreadyExists){
                state.items.push(action.payload);
            }
        },

        removeFromWishList: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        }
    }
});

export const {
    addToWishlist,
    removeFromWishList
} = wishlistSlice.actions;

export default wishlistSlice.reducer;