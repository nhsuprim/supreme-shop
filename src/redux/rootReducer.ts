import { baseApi } from "./api/baseApi";
import cartReducer from "./feature/cart/cartSlice";

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
};
