import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const camera1 = await prisma.camera.upsert({
    where: {
      name: 'Sony a6500',
    },
    update: {},
    create: {
      name: 'Sony a6500',
      slug: 'sony-a6500',
    },
  });

  const camera2 = await prisma.camera.upsert({
    where: {
      name: 'Canon 5D Mark IV',
    },
    update: {},
    create: {
      name: 'Canon 5D Mark IV',
      slug: 'canon-5d-mark-iv',
    },
  });

  const brand1 = await prisma.brand.upsert({
    where: {
      name: 'Sony',
    },
    update: {},
    create: {
      name: 'Sony',
      slug: 'sony',
    },
  });

  const brand2 = await prisma.brand.upsert({
    where: {
      name: 'Canon',
    },
    update: {},
    create: {
      name: 'Canon',
      slug: 'canon',
    },
  });

  const type1 = await prisma.type.upsert({
    where: {
      name: 'Mirrorless',
    },
    update: {},
    create: {
      name: 'Mirrorless',
      slug: 'mirrorless',
    },
  });

  const type2 = await prisma.type.upsert({
    where: {
      name: 'DSLR',
    },
    update: {},
    create: {
      name: 'DSLR',
      slug: 'dslr',
    },
  });

  console.log({ camera1, camera2, brand1, brand2, type1, type2 });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
