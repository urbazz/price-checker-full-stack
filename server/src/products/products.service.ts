import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { IProductsQuery } from './types';


@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product)
        private productRepository: typeof Product
    ) {}

    async createProduct(dto: CreateProductDto) {
        const product = await this.productRepository.create(dto);
        return product;
    }    

    async getAllProducts(query: IProductsQuery):Promise <{count: number, rows: Product[]}> {

        const limit = +query.limit || 9
        const page = +query.page || 1
        const offset = page * limit-limit

        return this.productRepository.findAndCountAll({
            limit,
            offset
        })
    }

    async getProduct(id: number | string) {
        const product = await this.productRepository.findOne({where: {id}})
        return product
    }

    async deleteProduct(id) {
        const product = await this.productRepository.destroy({where: {id}})
        return product
    }
}
