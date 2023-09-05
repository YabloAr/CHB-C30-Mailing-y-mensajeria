import ProductsService from '../service/products.service.js';
import ProductDTO from './DTO/product.dto.js';


class ProductController {

    getAll = async (req, res) => {
        try {
            let allProducts = await ProductsService.getAll()
            res.status(200).send(allProducts)
        } catch (error) {
            res.status(400).send({ status: 'Error 400', message: error.message });
        }
    }

    //GET PRODUCT BY ID
    getProductById = async (req, res) => {
        try {
            const pid = req.params.pid

            let foundProduct = await ProductsService.getProductById(pid)
            if (!foundProduct) return { status: 'failed.', message: `Product ${pid} not found in db.` }
            res.status(200).send(foundProduct)
        } catch (error) {
            res.status(400).send({ status: 'Error 400', message: error.message });
        }
    }

    //NEW PRODUCT
    createProduct = async (req, res) => {
        try {
            const newProduct = req.body
            const completeProduct = new ProductDTO(newProduct)
            const response = await ProductsService.createProduct(completeProduct)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ status: 'Error 400', message: error.message });
        }
    }

    //UPDATE PRODUCT
    updateProduct = async (req, res) => {
        try {
            const pid = req.params.pid
            const newData = req.body
            let updatedProduct = {};

            const propertiesToUpdate = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];

            propertiesToUpdate.forEach(prop => {
                if (newData.hasOwnProperty(prop)) {
                    updatedProduct[prop] = newData[prop];
                }
            });

            const response = await ProductsService.updateProduct(id, updatedProduct);
            res.status(200).send({ status: 'Success 200', payload: response })

        } catch (error) {
            res.status(400).send({ status: 'Error 400', message: error.message });
        }
    };

    //DELETE PRODUCT
    deleteProduct = async (pid) => {
        try {
            const response = await ProductsService.deleteProduct(pid)

            res.status(200).send({ status: 'Success 200', payload: response })
        } catch (error) {
            res.status(400).send({ status: 'Error 400', message: error.message });
        }
    };

}

export default new ProductController()
