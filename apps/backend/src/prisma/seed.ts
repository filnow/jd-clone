import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {

  const shopItemsData = [
    {
      id: 1,
      name: 'Nike Bluza Z Kapturem W Nsw Phnx Flc Os Po Hoodie',
      price: 899.99,
      gender: 'Male',
      color: 'Blue',
      category: 'Clothing',
      brand: 'Nike',
    },
    {
      id: 2,
      name: "Adidas Women's Running Shoes",
      price: 699.95,
      gender: 'Female',
      color: 'White',
      category: 'Shoes',
      brand: 'Adidas',
    },
    {
      id: 3,
      name: "Puma Men's Cotton T-shirt",
      price: 249.99,
      gender: 'Male',
      color: 'Black',
      category: 'Clothing',
      brand: 'Puma',
    },
    {
      id: 4,
      name: "Reebok Women's Sports Leggings",
      price: 349.99,
      gender: 'Female',
      color: 'Gray',
      category: 'Clothing',
      brand: 'Reebok',
    },
    {
      id: 5,
      name: "Nike Men's Basketball Shorts",
      price: 399.99,
      gender: 'Male',
      color: 'Red',
      category: 'Clothing',
      brand: 'Nike',
    },
    {
      id: 6,
      name: 'Converse Unisex Classic Sneakers',
      price: 549.95,
      gender: 'Unisex',
      color: 'Black',
      category: 'Shoes',
      brand: 'Converse',
    },
    {
      id: 7,
      name: 'Vans Old Skool Skate Shoes',
      price: 599.99,
      gender: 'Unisex',
      color: 'Navy',
      category: 'Shoes',
      brand: 'Vans',
    },
  ];
  
  for (const itemData of shopItemsData) {
    await prisma.shop_items.upsert({
      where: { id: itemData.id },
      update: {},
      create: itemData,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
