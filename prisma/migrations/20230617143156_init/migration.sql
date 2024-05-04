-- CreateTable
CREATE TABLE "PRODUCT" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65, 30) NOT NULL,
    "stockQuantity" INTEGER NOT NULL,
    "category" TEXT NOT NULL
    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
