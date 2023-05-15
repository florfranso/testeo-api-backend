import { ProductRepository } from "./product.repository.js";
import { productDao } from "../daos/factory.js";
import { ProductDTO } from "../daos/dtos/product.dto.js";

const productService = new ProductRepository(productDao)

export {productService}