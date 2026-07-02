const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@darkcodex.ai' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@darkcodex.ai',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('Admin user created/exists:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
