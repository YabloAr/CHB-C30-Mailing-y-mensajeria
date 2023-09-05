import { getDAOS } from '../models/daos/index.dao.js'

const { CartsDAO } = getDAOS()

class CartsService {

    async getAll() {
        try {
            return await CartsDAO.getAll()
        } catch (error) { throw error }
    }

    async getCartById(cid) {
        try {
            return await CartsDAO.getCartById(cid)
        } catch (error) { throw error }

    }

    async createCart() {
        try {
            return await CartsDAO.createCart()
        } catch (error) { throw error }
    }

    async addProductToCart(cid, pid) {
        try {
            return await CartsDAO.addProductToCart(cid, pid)
        } catch (error) { throw error }
    }

    async updateCartProducts(cid, newProducts) {
        try {
            return await CartsDAO.updateCartProducts(cid, newProducts)
        } catch (error) { throw error }
    }

    async updateQuantity(cid, pid, quantityNumber) {
        try {
            return await CartsDAO.updateQuantity(cid, pid, quantityNumber)
        } catch (error) { throw error }
    }

    async deleteProductFromCart(cid, pid) {
        try {
            return await CartsDAO.deleteProductFromCart(cid, pid)
        } catch (error) { throw error }
    }

    async emptyCart(cid) {
        try {
            return await CartsDAO.emptyCart(cid)
        } catch (error) { throw error }
    }

}

export default new CartsService()