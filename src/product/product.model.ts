import { Prisma } from "@prisma/client";


export class Product implements Prisma.ProductCreateInput {
     id: string;    
     name:string;
     price:number;
     category:string;
     description?:string; //as this can be optional
     stockQuantity:number;
}