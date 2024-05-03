import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Controller('api/v1/product')
export class ProductController {

     constructor(private readonly productService: ProductService) { }


     @Post()
     create(@Body() productData: Product): Promise<Product> {
       return this.productService.createProduct(productData);
     }
   
     @Get()
     findAll(): Promise<Product[]> {
       return this.productService.getAllProduct();
     }
   
     @Put(":id")
     update(@Param('id') id: string, @Body() productData: Product): Promise<Product> {
       return this.productService.updateProduct(parseInt(id), productData);
     }
   
     @Delete(":id")
   
     delete(@Param('id') id: string): Promise<Product> {
   
       return this.productService.deleteProduct(parseInt(id));
   
     }
   
}