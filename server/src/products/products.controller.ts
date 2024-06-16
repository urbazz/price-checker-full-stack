import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private ProductsService: ProductsService) {}

    @Post()
    createProduct(@Body() useDto: CreateProductDto) {
        return this.ProductsService.createProduct(useDto)
    }    

    @Get()
    getAllProducts(@Query() query) {
        return this.ProductsService.getAllProducts(query)
    }

    @Get()
    getProduct() {

    }

    @Delete()
    deleteProduct() {
        
    }
}
