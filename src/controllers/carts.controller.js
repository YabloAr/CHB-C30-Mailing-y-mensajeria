import CartsService from '../service/carts.service.js'

class CartsController {

    getAll = async (req, res) => {
        try {
            const allCarts = await CartsService.getAll()
            if (allCarts.length <= 0) {
                res.send({ status: 'Error', message: 'No existing carts.' })
            } else {
                res.status(200).send({ payload: allCarts })
            }
        } catch (error) { throw error }
    }

    getCartById = async (req, res) => {
        try {
            const cid = req.params.cid
            const foundCart = await CartsService.getCartById(cid)
            if (foundCart.status === 200) {
                res.status(200).send({ payload: foundCart })
            } else {
                res.send({ status: "Error", payload: foundCart })
            }
        } catch (error) { throw error }
    }

    createCart = async (req, res) => {
        try {
            const response = await CartsService.createCart()
            if (response.status === 200) {
                res.status(200).send({ status: "Ok", message: "New cart added." })
            } else {
                res.send({ status: "Error", payload: response })
            }
        } catch (error) { throw error }
    }

    addToCart = async (req, res) => {
        try {
            const cid = req.params.cid
            const pid = req.params.pid

            const result = await CartsService.addProductToCart(cid, pid)
            if (result.status === 200) {
                res.status(200).send({ status: "Ok", payload: result })
            } else {
                res.status(500).send({ status: "error", payload: result });
            }
        } catch (error) { throw error }
    }

    updateCartProducts = async (req, res) => {
        try {
            const cid = req.params.cid
            const newProducts = req.body
            const result = await CartsService.updateCartProducts(cid, newProducts)
            if (result.status === 200) {
                res.status(200).send({ status: "Ok", payload: result })
            } else {
                res.status(500).send({ status: "error", message: error.message });
            }
        } catch (error) { throw error }
    }

    updateQuantity = async (req, res) => {
        try {
            const cid = req.params.cid
            const pid = req.params.pid
            const quantity = req.body
            const quantityNumber = parseInt(quantity.quantity)

            const result = await CartsService.updateQuantity(cid, pid, quantityNumber)
            if (result.status === 200) {
                res.status(200).send({ status: "Ok", payload: result })
            } else {
                res.status(500).send({ status: "error", payload: result });
            }
        } catch (error) { throw error }
    }

    deleteProductFromCart = async (req, res) => {
        try {
            const cid = req.params.cid
            const pid = req.params.pid
            const result = await CartsService.deleteProductFromCart(cid, pid)
            if (result.status === 200) {
                res.status(200).send({ status: "Ok", payload: result })
            } else {
                res.status(500).send({ status: "error", payload: result });
            }
        } catch (error) { throw error }
    }

    emptyCart = async (req, res) => {
        try {
            const cid = req.params.cid
            const result = await CartsService.emptyCart(cid)
            if (result.status === 200) {
                res.status(200).send({ status: "Ok", payload: result })
            } else {
                res.status(500).send({ status: "error", payload: result });
            }
        } catch (error) { throw error }
    }

}

export default new CartsController()