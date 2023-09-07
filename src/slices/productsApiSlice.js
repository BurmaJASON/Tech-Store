import { PRODUCTS_URL } from "../constant";
import { apiSlice } from "./apiSlice";

export const productsApiSlice =  apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts : builder.query({
            query : ({ pageNumber }) => ({
                url : PRODUCTS_URL,
                params : {
                    pageNumber
                }
            }),
            providesTags : ['Products'],
            keepUnusedDataFor : 5
        }),
        getProductDetail : builder.query({
            query : (productId) => ({
                url : `${PRODUCTS_URL}/${productId}`
            }),
            keepUnusedDataFor : 5
        }),
        createProduct : builder.mutation({
            query : () => ({
                url : PRODUCTS_URL,
                method : 'POST'
            }),
            invalidatesTags : ['Product']
        }),
        updateProduct : builder.mutation ({
            query : (data) => ({
                url : `${PRODUCTS_URL}/${data.productId}`,
                method : 'PUT',
                body : data
            }),
            invalidatesTags : ['Products']
        }),
        uploadProductImage : builder.mutation({
            query : (data) => ({
                url : `/api/upload`,
                method :'POST',
                body : data
            })
        }),
        deleteProduct : builder.mutation({
            query : (productId) => ({
                url : `${PRODUCTS_URL}/${productId}`,
                method : 'DELETE'
            })
        }),
        createReview : builder.mutation ({
            query : (data) => ({
                url : `${PRODUCTS_URL}/${data.productId}/reviews`,
                method : 'POST',
                body : data
            }),
            invalidatesTags : ['Product']
        })
    })
});

export const { useUploadProductImageMutation,useGetProductsQuery, useGetProductDetailQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation, useCreateReviewMutation } = productsApiSlice;