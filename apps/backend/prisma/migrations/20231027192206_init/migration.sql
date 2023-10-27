-- CreateTable
CREATE TABLE "shop_items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "price" DECIMAL,
    "gender" VARCHAR(10),
    "color" VARCHAR(50),
    "category" VARCHAR(50),

    CONSTRAINT "shop_items_pkey" PRIMARY KEY ("id")
);
