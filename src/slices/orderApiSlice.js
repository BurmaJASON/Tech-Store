import { apiSlice } from './apiSlice'
import { ORDERS_URL } from '../constant'

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoinsts : (builder) => ({
        createOrder : builder.mutation({
            query : (order) => ({
                url : ORDERS_URL,
                method : 'POST',
                body : {...order}
            })
        })
    })
})

export const { useCreateOrderMutation } = ordersApiSlice