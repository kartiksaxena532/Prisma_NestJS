import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(productData: Product): Promise<Product> {
    return this.prisma.product.create({ data: productData });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async update(id: number, productData: Product): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data: productData });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
