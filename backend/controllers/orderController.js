import asyncHander from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'

// @desc Create new order 
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHander(async(req,res) => {
    res.send('add order items'); 
})


// @desc Get logged in user orders 
// @route POST /api/orders/myorders
// @access Private
const getMyOrders = asyncHander(async(req,res) => {
    res.send('get my order items'); 
})

// @desc Get order by id 
// @route POST /api/orders/:id
// @access Private/Admin
const getOrderById = asyncHander(async(req,res) => {
    res.send('get order by ID'); 
})

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHander(async(req,res) => {
    res.send('update order to paid'); 
})

// @desc Update order to deliver
// @route GET /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDeliver = asyncHander(async(req,res) => {
    res.send('update order to deliver'); 
})

// @desc Get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHander(async(req,res) => {
    res.send('get all orders'); 
})


export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToDeliver,
    updateOrderToPaid,
    getOrders
}