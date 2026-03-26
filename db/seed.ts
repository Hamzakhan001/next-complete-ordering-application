import 'dotenv/config'
import { PrismaClient } from "../lib/generated/prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import sampleData from "./sample-date"

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({
  adapter
})

async function main() {
  await prisma.product.deleteMany()

  await prisma.product.createMany({
    data: sampleData.products
  })

  console.log("DB seeded success")
}

main()