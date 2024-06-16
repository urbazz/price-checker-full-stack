import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { IProductsQuery } from './types';


@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productRepository: typeof Product) {}

    async createProduct(dto: CreateProductDto) {
        const product = await this.productRepository.create(dto);
        return product;
    }    

    async getAllProducts(query: IProductsQuery):Promise <{count: number, rows: Product[]}> {

        const limit = +query.limit;
        const offset = +query.offset *  20

        return this.productRepository.findAndCountAll({
            limit,
            offset
        })
    }

    async getProduct() {

    }

    async deleteProduct() {
        
    }
}
