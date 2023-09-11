import { Router } from 'express'
import ProductsController from '../controllers/products.controller.js'
import { checkAdmin, checkSession, checkUser } from '../middlewares/auth.middleware.js'

const router = Router()
//agregar middlewares de credentiales
router.get('/', ProductsController.getAll)
router.get('/:pid', ProductsController.getProductById)
router.post('/', ProductsController.createProduct)
router.put('/:pid', ProductsController.updateProduct)
router.delete('/:pid', ProductsController.deleteProduct)

export default router