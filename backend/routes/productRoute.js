import express from "express";
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js'


// router.get('/',getProducts) //the same with below
router.route('/').get(getProducts);

router.route('/:id').get(getProductById);


export default router;