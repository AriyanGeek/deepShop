import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@deepshop.com' },
    update: {},
    create: {
      email: 'admin@deepshop.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Create sample categories
  const electronics = await prisma.category.upsert({
    where: { name: 'Electronics' },
    update: {},
    create: { name: 'Electronics' },
  });

  // Create sample products
  await prisma.product.create({
    data: {
      name: 'Sample Product',
      description: 'This is a sample product description',
      price: 99.99,
      stock: 100,
      images: ['sample1.jpg', 'sample2.jpg'],
      categoryId: electronics.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });