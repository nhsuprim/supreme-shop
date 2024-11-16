import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity?: number;
}

interface ICart {
    products: IProduct[];
    total: number;
}

const initialState: ICart = {
    products: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity! += 1;
            } else {
                state.products.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            state.total += action.payload.price;
        },
        removeProductFromCart: (state, action: PayloadAction<IProduct>) => {
            // Remove product by its id
            state.products = state.products.filter(
                (product) => product.id !== action.payload.id
            );
            state.total -= action.payload.price;
        },
        removeOneProduct: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );
            if (existingProduct && existingProduct.quantity! > 1) {
                existingProduct.quantity! -= 1;
            }
            state.total -= action.payload.price;
        },
    },
});

export const { addProductToCart, removeProductFromCart, removeOneProduct } =
    cartSlice.actions;

export default cartSlice.reducer;
