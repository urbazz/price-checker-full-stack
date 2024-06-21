import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { IProductsQuery } from './types';
import { UpdateProductDto } from './dto/update-product.dto';

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

    @Get('/:id')
    getProduct(@Param('id') id: string) {
        return this.ProductsService.getProduct(id)
    }

    @Get('/ean/:str')
    getProductByEAN(@Param('str') str: string | number) {
        return this.ProductsService.getByEAN(str)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.ProductsService.deleteProduct(id)
    }

    @Put(':id')
    editProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
        return this.ProductsService.editProduct(id, dto)
    }
}
