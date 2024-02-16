const investors = require('./investors')
const startups = require('./startups')
const investments =  require('./investments')

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main(){
    for(let investor of investors){
        await prisma.investor.create({
            data: investor
        })
    }
    for(let startup of startups){
        await prisma.startup.create({
            data: startup
        })
    }
    for(let investment of investments){
        await prisma.investments.create({
            data: investment
        })
    }
}

main().catch(e=>{
    console.log(e)
}).finally(()=>{
    prisma.$disconnect();
})
