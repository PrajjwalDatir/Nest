import { Injectable } from '@nestjs/common'
import { Product } from './product.model'
import { v4 } from 'uuid'

@Injectable()
export class ProductService {
    products: Product[] = []
    id: string = v4()
    public insertProduct(title: string, description: string, price: number) {
        const newProduct = new Product(this.id, title, description, price)
        this.products.push(newProduct)
        return this.id
    }

    public getProducts() {
        return [...this.products]
    }
}
