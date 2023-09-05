import productsModel from '../schemas/products.schema.js'

class ProductsDAO {
    constructor() {
        console.log('Products DAO conected.')
    }

    //GET ALL
    async getAll() {
        try {
            const products = await productsModel.find().lean()
            return products
        } catch (error) {
            throw error;
        }

    }

    //GET PRODUCT BY ID
    getProductById = async (pid) => {
        try {
            let foundProduct = await productsModel.findById(pid)
            if (!foundProduct) return null

            return foundProduct
        } catch (error) {
            throw error;
        }
    }

    //NEW PRODUCT
    createProduct = async (product) => {
        try {
            await productsModel.create(product)
            return ({ status: 200, message: `Product added.`, payload: product })
        } catch (error) {
            throw error;
        }
    }

    //UPDATE PRODUCT
    updateProduct = async (pid, updatedFields) => {
        try {
            // Assuming there's a 'Product' model defined for Mongoose
            const updatedProduct = await productsModel.findByIdAndUpdate(pid, updatedFields, { new: true });

            if (!updatedProduct) return null

            return updatedProduct;
        } catch (error) {
            throw error;
        }

    }

    //DELETE PRODUCT
    deleteProduct = async (pid) => {
        try {
            await productsModel.deleteOne({ _id: pid });
            if (result.deletedCount === 0) {
                return { status: 'Error', message: `Product ${pid} not found.` };
            }
            return { status: 'Success.', message: `Product ${pid} deleted.` };
        } catch (error) { return { status: 'Error', message: error.message } }
    };

    //generateNewCode 7 digits
    generateNewCode = async () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomCode = '';
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomCode += characters[randomIndex];
        }
        return randomCode
    }
}

export default new ProductsDAO()

