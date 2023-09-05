import { getDAOS } from '../models/daos/index.dao.js'

const { ProductsDAO } = getDAOS()

class ProductsService {

    async getAll() {
        try {
            return await ProductsDAO.getAll()
        } catch (error) { throw error }
    }

    async getProductById(pid) {
        try {
            const product = await ProductsDAO.getProductById(pid)
            if (product === null) return { status: 'error', message: 'Product not found' }

            return product

        } catch (error) { throw error }
    }

    async createProduct(product) {
        try {
            const response = await ProductsDAO.createProduct(product)
            return response
        } catch (error) { throw error }
    }

    async updateProduct(pid, product) {
        const response = await ProductsDAO.updateProduct(pid, product)
        if (response === null) return { status: 'error', message: 'Product not found' }
        return response

        try {

        } catch (error) { throw error }
    }

    async deleteProduct(pid) {
        const response = await ProductsDAO.deleteProduct(pid)
        return response

        try {

        } catch (error) { throw error }
    }

}

export default new ProductsService()