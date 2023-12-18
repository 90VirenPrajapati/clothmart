import {createSlice} from "@reduxjs/toolkit";
import {Products} from "../../type";

interface StoreState {
    productData: Products[];
    userInfo: null | string;
    orderData: [];
    wishlistData: Products[];
}

const initialState: StoreState = {
    productData: [],
    userInfo: null,
    orderData: [],
    wishlistData: [],
};
export const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.productData.find(
                (item: Products) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: Products) => item._id === action.payload._id
            );
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: Products) => item._id === action.payload._id
            );
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity === 1;
            } else {
                existingProduct && existingProduct.quantity--;
            }
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        deleteUser: (state) => {
            state.userInfo = null;
        },
        saveOrder: (state, action) => {
            state.orderData = action.payload;
        },
        resetOrder: (state) => {
            state.orderData = [];
        },
        addToWishlist: (state, action) => {
            const existingProduct = state.wishlistData.find(
                (item: Products) => item._id === action.payload._id
            );
            if (!existingProduct) {
                state.wishlistData.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistData = state.wishlistData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetWishlist: (state) => {
            state.wishlistData = [];
        },
    },
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart,
    addUser,
    deleteUser,
    saveOrder,
    resetOrder,
    addToWishlist,
    removeFromWishlist,
    resetWishlist,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
