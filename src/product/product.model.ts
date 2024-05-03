import { Prisma, ProductCreateInput } from "@prisma/client";

export class Product implements ProductCreateInput {
     id: number;
     title: string;
     description?: string;
}