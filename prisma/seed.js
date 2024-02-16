const investors = require('./investors')
const startups = require('./startups')
const investments =  require('./investments')

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.investments.deleteMany();
  await prisma.$queryRaw`ALTER TABLE investments AUTO_INCREMENT = 1`;
  await prisma.startup.deleteMany();
  await prisma.$queryRaw`ALTER TABLE startup AUTO_INCREMENT = 1`;
  await prisma.investor.deleteMany();
  await prisma.$queryRaw`ALTER TABLE investor AUTO_INCREMENT = 1`;
    await prisma.investor.createMany({
        data: investors
    })

    await prisma.startup.createMany({
        data: startups
    })

    await prisma.investments.createMany({
        data: investments
    })
}

main().catch(e=>{
    console.log(e)
}).finally(()=>{
    prisma.$disconnect();
})
