import { ProductDTO } from "../daos/dtos/product.dto.js";

class ProductRepository{
    constructor(dao){
        this.dao = dao;
    };

    async getProductos() {
        const products = await this.dao.getAll()
        const newProductsDTO = products.map(product => new ProductDTO(product))
        return newProductsDTO
    }

    async getProductById(id) {
        const product = await this.dao.getById(id)
        const newProductDTO = new ProductDTO(product)
        return newProductDTO
    }

}

export {ProductRepository}