import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";

import { ProductService } from './product.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() productData: Product): Promise<Product> {
    return this.productService.create(productData);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Put(":id")
  update(@Param('id') id: string, @Body() productData: Product): Promise<Product> {
    return this.productService.update(parseInt(id), productData);
  }

  @Delete(":id")

  delete(@Param('id') id: string): Promise<void> {

    return this.productService.delete(parseInt(id));

  }

}
