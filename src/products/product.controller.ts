import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}
    @Post()
    addProduct(@Body('title') title: string, @Body('description') description: string, @Body('price') price: number) {
        const id = this.productService.insertProduct(title, description, price)
        return { id }
    }

    @Get()
    getAllProducts() {
        return this.productService.getProducts()
    }
}
