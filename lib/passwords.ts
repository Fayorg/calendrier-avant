import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

let users = 24
let keys = []
let keyLength = 8
let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

async function main() {
    // ... you will write your Prisma Client queries here
    for (let i = 1; i <= users; i++) {
        let key = ''
        for (let j = 0; j < keyLength; j++) {
            key += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        await prisma.keys.create({
            data: {
                key: key
            }
        })
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
