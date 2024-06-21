import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { IProductsQuery } from './types';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindOptions, Op} from 'sequelize';


@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product) private productRepository: typeof Product) {}

    async createProduct(dto: CreateProductDto) {
        const product = await this.productRepository.create(dto);
        return product;
    }    

    async getAllProducts(query: IProductsQuery):Promise <{total: number, data: Product[]}> {
        const {filter, pagination, sort} = query
        const whereClause: FindOptions = filter ? {
            where: {
              name: {
                [Op.like]: `%${filter.name}%`
              }
            }
          } : {};
        let page = 1
        let offset = 0
        let limit = 10
        console.log(whereClause)

        if (pagination && pagination.page && pagination.perPage) {
            page = pagination.page
            offset = (pagination.page - 1) * pagination.perPage;
            limit = pagination.perPage;
        }

        const {rows: data, count: total} = await this.productRepository.findAndCountAll({
            ...whereClause,
            offset: (page - 1) * limit,
            limit: limit,
            // order: [[sort.field, sort.order]]
        })

        return {total, data}
    }

    async getProduct(id: number | string) {
        const product = await this.productRepository.findOne({where: {id}})
        return product
    }

    async deleteProduct(id) {
        const product = await this.productRepository.destroy({where: {id}})
        return product
    }

    
    async getByEAN(str: string | number) {
        const product = await this.productRepository.findOne({where: {EAN: str}})
        return product
    }

    async editProduct(id: number | string, dto: UpdateProductDto) {
        const product = await this.productRepository.findByPk(id)
        await product.update({
            name: dto.name,
            price: Number(dto.price),
            EAN: Number(dto.EAN),
            description: dto.description
        })
        console.log(product)
        return product
    }
}
