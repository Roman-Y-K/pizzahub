import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';

import { prisma } from './prisma-client';

import { categories, _ingredients, products } from './constans';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(8, 15),
    pizzaType,
    size,
  } as Prisma.ProductVariantsUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullname: 'User Test',
        email: 'user@test.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullname: 'Admin Admin',
        email: 'admin@test.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Pepperoni Fresh',
      imageUrl: '/images/pizzas/pepperoni-fresh.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Cheese',
      imageUrl: '/images/pizzas/cheess.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo Fresh',
      imageUrl: '/images/pizzas/chorizo-fresh.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza4 = await prisma.product.create({
    data: {
      name: 'Ham & Cheese',
      imageUrl: '/images/pizzas/ham-cheess.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza5 = await prisma.product.create({
    data: {
      name: 'Ham & Mushrooms',
      imageUrl: '/images/pizzas/ham-mushrooms.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza6 = await prisma.product.create({
    data: {
      name: 'Hawaiian',
      imageUrl: '/images/pizzas/hawaiian.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza7 = await prisma.product.create({
    data: {
      name: 'Veggie Delight',
      imageUrl: '/images/pizzas/veggie.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza8 = await prisma.product.create({
    data: {
      name: 'Diablo',
      imageUrl: '/images/pizzas/diablo.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza9 = await prisma.product.create({
    data: {
      name: 'Margherita',
      imageUrl: '/images/pizzas/margarita.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza10 = await prisma.product.create({
    data: {
      name: 'Special',
      imageUrl: '/images/pizzas/special.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza11 = await prisma.product.create({
    data: {
      name: 'Chill Grill',
      imageUrl: '/images/pizzas/сhill-grill.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  const pizza12 = await prisma.product.create({
    data: {
      name: 'BBQ Chicken',
      imageUrl: '/images/pizzas/bbq-chicken.png',
      categoryId: 1,
      ingredients: {
        connect: _ingredients,
      },
    },
  });

  await prisma.productVariants.createMany({
    data: [
      // Pizzas variations
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza9.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza9.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza10.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza10.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza11.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza11.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza12.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza12.id, pizzaType: 2, size: 40 }),

      // Other products
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {},
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariants" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
