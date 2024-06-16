import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { IProductsQuery } from './types';

@Controller('products')
export class ProductsController {

    constructor(private ProductsService: ProductsService) {}

    @Post()
    createProduct(@Body() useDto: CreateProductDto) {
        return this.ProductsService.createProduct(useDto)
    }    

    @Get()
    getAllProducts(@Query() query: IProductsQuery) {
        return this.ProductsService.getAllProducts(query)
    }

    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.ProductsService.getProduct(id)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.ProductsService.deleteProduct(id)
    }
}
