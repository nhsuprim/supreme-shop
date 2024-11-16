"use client";
import { useGetProductByIdQuery } from "@/redux/api/productsApi";
import React from "react";
import ImageSider from "@/components/imageSlider";
import { useAppDispatch } from "@/redux/hooks";
import { addProductToCart } from "@/redux/feature/cart/cartSlice";

interface PageProps {
    params: {
        id: string;
    };
}

const ProductPage = ({ params }: PageProps) => {
    const { data: product, isLoading } = useGetProductByIdQuery(params.id);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                Product not found
            </div>
        );
    }
    const dispatch = useAppDispatch();

    const handleCart = (product: any) => {
        dispatch(addProductToCart(product));
        console.log(product);
    };

    return (
        <div className="container mx-auto p-6">
            {/* Product Header */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <ImageSider product={product} />
                </div>
                {/* Product Details */}
                <div className="w-full md:w-1/2 md:ml-8 mt-6 md:mt-0">
                    <h1 className="text-3xl font-semibold">{product.title}</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        {product.description}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-green-600">
                        ${product.price}
                    </p>
                    <p className="text-sm text-gray-500">
                        Category: {product.category}
                    </p>
                    <p className="text-sm text-gray-500">
                        Brand: {product.brand}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Stock: {product.availabilityStatus}
                    </p>
                    <p className="mt-2 text-sm">SKU: {product.sku}</p>
                    <p className="mt-2 text-sm">
                        Warranty: {product.warrantyInformation}
                    </p>
                    <p className="mt-2 text-sm">
                        Shipping: {product.shippingInformation}
                    </p>
                    <button
                        onClick={() => handleCart(product)}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Additional Details Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="font-semibold">Weight:</p>
                        <p>{product.weight} oz</p>
                    </div>
                    <div>
                        <p className="font-semibold">Dimensions:</p>
                        <p>
                            {product.dimensions.width} x{" "}
                            {product.dimensions.height} x{" "}
                            {product.dimensions.depth} cm
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold">Return Policy:</p>
                        <p>{product.returnPolicy}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Minimum Order Quantity:</p>
                        <p>{product.minimumOrderQuantity}</p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                {product.reviews.length > 0 ? (
                    <div className="space-y-4">
                        {product.reviews.map((review: any, index: any) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-100 rounded shadow-md flex flex-col md:flex-row justify-between"
                            >
                                <div>
                                    <p className="font-semibold">
                                        {review.reviewerName}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {review.comment}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">
                                        Rating: {review.rating}/5
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {new Date(
                                            review.date
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No reviews available</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
