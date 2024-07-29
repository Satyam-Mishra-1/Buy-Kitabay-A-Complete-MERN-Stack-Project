import express from 'express'
import { addProduct, deleteProductByID, getProductById, getProducts, updateProductByID } from '../Controllers/product.js';

const router = express.Router();

router.post('/add',addProduct);

router.get('/all',getProducts);

router.get('/:id',getProductById);

router.put('/:id',updateProductByID);

router.delete('/:id',deleteProductByID);


export default router 