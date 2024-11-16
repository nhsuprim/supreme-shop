import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => ({
                url: "/products?limit=200",
                method: "GET",
            }),
        }),
        getProductById: build.query({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: "GET",
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
