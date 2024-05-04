import { PrismaService } from "src/prisma.service";
import { Product } from "./product.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductService {

     constructor(private prisma: PrismaService) { }

     async getAllProduct(): Promise<Product[]> {
          return this.prisma.product.findMany()
     }

     async getProduct(id: number): Promise<Product | null> {
          return this.prisma.product.findUnique({ where: { id: Number(id) } })
     }

     async createProduct(data: Product): Promise<Product> {
          return this.prisma.product.create({
               data: {id : data.id , name :data.name, description :data.description ,price: data.price , category : data.category ,stockQuantity : data.stockQuantity }
          })
     }

     async updateProduct(id: number, data: Product): Promise<Product> {
          return this.prisma.product.update({
               where: { id: Number(id) },
               data: { price: data.price , category : data.category ,stockQuantity : data.stockQuantity }
             
          })
     }

     async deleteProduct(id: number): Promise<Product> {
          return this.prisma.product.delete({
               where: { id: Number(id) }
          })
     }
}